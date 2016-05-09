'use strict';

angular.module('adama-web').factory('Principal', function($http, $q, $rootScope, $resource, $state, adamaConstant, adamaTokenService) {
	var Password = $resource(adamaConstant.apiBase + 'account/change_password');
	var PasswordResetInit = $resource(adamaConstant.apiBase + 'account/reset_password/init', {}, {
		save: {
			method: 'POST',
			params: {
				urlResetPassword: adamaConstant.urlCreatePassword
			}
		}
	});
	var PasswordResetFinish = $resource(adamaConstant.apiBase + 'account/reset_password/finish');

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

		// from jwt token : sub
		// users/byLogin/:sub
		adamaTokenService.getUsername().then(function(username) {
			if (username) {
				return $http({
					method: 'GET',
					url: adamaConstant.apiBase + 'users/byLogin/' + username
				}).then(function(response) {
					return response.data;
				});
			}
			return $q.reject('not connected');
		}).then(function(account) {
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
				$state.go('app.main', {}, {
					location: 'replace'
				});
			}
			if ((!$rootScope.toState.data || !$rootScope.toState.data.authorities) && !isAuthenticated) {
				// user is not signed in but desired state needs an
				// authenticated user
				$state.go('auth.signin', {}, {
					location: 'replace'
				});
			} else if ($rootScope.toState.data && //
				$rootScope.toState.data.authorities && //
				$rootScope.toState.data.authorities.length > 0 && //
				!api.hasAnyAuthority($rootScope.toState.data.authorities) //
			) {
				if (isAuthenticated) {
					// user is signed in but not authorized for
					// desired state
					$state.go('auth.accessDenied', {}, {
						location: 'replace'
					});
				} else {
					// user is not authenticated. stow the state
					// they wanted before you
					// send them to the signin state, so you can
					// return them when you're done
					$rootScope.previousStateName = $rootScope.toState;
					$rootScope.previousStateNameParams = $rootScope.toStateParams;
					// now, send them to the signin state so they
					// can log in
					$state.go('auth.signin', {}, {
						location: 'replace'
					});
				}
			}
		});
	};

	api.updateAccount = function(account) {
		return $http({
			method: 'PUT',
			url: adamaConstant.apiBase + 'users',
			data: {
				user: account
			}
		}).then(function() {
			$rootScope.$emit('auth.updateAccount', {
				account: account
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
