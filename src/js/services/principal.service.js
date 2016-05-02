'use strict';

angular.module('adama-web').factory('Principal', function($q, $rootScope, $resource, $state, adamaConstant) {
	var Password = $resource(adamaConstant.apiBase + 'api/account/change_password');
	var PasswordResetInit = $resource(adamaConstant.apiBase + 'api/account/reset_password/init');
	var PasswordResetFinish = $resource(adamaConstant.apiBase + 'api/account/reset_password/finish');
	var Account = $resource(adamaConstant.apiBase + 'api/account');

	var _identity;
	var _authenticated = false;

	var api = {};

	api.isIdentityResolved = function() {
		return angular.isDefined(_identity);
	};

	api.isAuthenticated = function() {
		return _authenticated;
	};

	api.hasAuthority = function(authority) {
		if (!_authenticated) {
			return $q.when(false);
		}
		return this.identity().then(function(_id) {
			return _id.authority && _id.authority === authority;
		}, function() {
			return false;
		});
	};

	api.hasAnyAuthority = function(authorities) {
		if (!_authenticated || !_identity || !_identity.authority) {
			return false;
		}
		for (var i = 0; i < authorities.length; i++) {
			if (_identity.authority === authorities[i]) {
				return true;
			}
		}

		return false;
	};

	api.authenticate = function(identity) {
		_identity = identity;
		_authenticated = identity !== null;
	};

	api.identity = function(force) {
		var deferred = $q.defer();

		if (force === true) {
			_identity = undefined;
		}

		// check and see if we have retrieved the identity data from the
		// server.
		// if we have, reuse it by immediately resolving
		if (angular.isDefined(_identity)) {
			deferred.resolve(_identity);

			return deferred.promise;
		}

		// retrieve the identity data from the server, update the
		// identity object, and then resolve.
		Account.get().$promise.then(function(account) {
			_identity = account;
			_authenticated = true;
			deferred.resolve(_identity);
		}, function() {
			_identity = null;
			_authenticated = false;
			deferred.resolve(_identity);
		});
		return deferred.promise;
	};

	api.authorize = function(force) {
		return api.identity(force).then(function() {
			var isAuthenticated = api.isAuthenticated();
			// an authenticated user can't access to login pages
			if (isAuthenticated && $rootScope.toState.name && $rootScope.toState.name === 'auth.signin') {
				$state.go('app.main');
			}
			if ((!$rootScope.toState.data || !$rootScope.toState.data.authorities) && !isAuthenticated) {
				// user is not signed in but desired state needs an
				// authenticated user
				$state.go('auth.signin');
			} else if ($rootScope.toState.data && //
			$rootScope.toState.data.authorities && //
			$rootScope.toState.data.authorities.length > 0 && //
			!api.hasAnyAuthority($rootScope.toState.data.authorities) //
			) {
				if (isAuthenticated) {
					// user is signed in but not authorized for
					// desired state
					$state.go('auth.accessDenied');
				} else {
					// user is not authenticated. stow the state
					// they wanted before you
					// send them to the signin state, so you can
					// return them when you're done
					$rootScope.previousStateName = $rootScope.toState;
					$rootScope.previousStateNameParams = $rootScope.toStateParams;
					// now, send them to the signin state so they
					// can log in
					$state.go('auth.signin');
				}
			}
		});
	};

	api.updateAccount = function(account) {
		return Account.save(account).$promise.then(function() {
			$rootScope.$emit('auth.updateAccount', {
				account : account
			});
			return account;
		});
	};

	api.changePassword = function(newPassword) {
		return Password.save(newPassword).$promise;
	};

	api.resetPasswordInit = function(mail) {
		return PasswordResetInit.save(mail).$promise;
	};

	api.resetPasswordFinish = function(keyAndPassword) {
		return PasswordResetFinish.save(keyAndPassword).$promise;
	};

	return api;
});
