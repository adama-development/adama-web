'use strict';

angular.module('adama-web')
	.factory('Auth', function Auth($rootScope, $state, $q, $translate, $resource, Principal, AuthServerProvider, Account, adamaConstant) {
		var Password = $resource(adamaConstant.apiBase + 'api/account/change_password');
		var PasswordResetInit = $resource(adamaConstant.apiBase + 'api/account/reset_password/init');
		var PasswordResetFinish = $resource(adamaConstant.apiBase + 'api/account/reset_password/finish');
		return {
			login: function(credentials, callback) {
				var cb = callback || angular.noop;
				var deferred = $q.defer();

				AuthServerProvider.login(credentials).then(function(data) {
					// retrieve the logged account information
					Principal.identity(true).then(function(account) {
						// After the login the language will be changed to
						// the language selected by the user during his
						// registration
						$translate.use(account.langKey);
						deferred.resolve(data);
					});
					return cb();
				}).catch(function(err) {
					this.logout();
					deferred.reject(err);
					return cb(err);
				}.bind(this));

				return deferred.promise;
			},

			logout: function() {
				AuthServerProvider.logout();
				Principal.authenticate(null);
				// Reset state memory
				$rootScope.previousStateName = undefined;
				$rootScope.previousStateNameParams = undefined;
			},

			authorize: function(force) {
				return Principal.identity(force)
					.then(function() {
						var isAuthenticated = Principal.isAuthenticated();
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
							!Principal.hasAnyAuthority($rootScope.toState.data.authorities) //
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
			},
			updateAccount: function(account, callback) {
				var cb = callback || angular.noop;

				return Account.save(account,
					function() {
						$rootScope.$emit('auth.updateAccount', {
							account: account
						});
						return cb(account);
					},
					function(err) {
						return cb(err);
					}.bind(this)).$promise;
			},

			changePassword: function(newPassword, callback) {
				var cb = callback || angular.noop;

				return Password.save(newPassword, function() {
					return cb();
				}, function(err) {
					return cb(err);
				}).$promise;
			},

			resetPasswordInit: function(mail, callback) {
				var cb = callback || angular.noop;

				return PasswordResetInit.save(mail, function() {
					return cb();
				}, function(err) {
					return cb(err);
				}).$promise;
			},

			resetPasswordFinish: function(keyAndPassword, callback) {
				var cb = callback || angular.noop;

				return PasswordResetFinish.save(keyAndPassword, function() {
					return cb();
				}, function(err) {
					return cb(err);
				}).$promise;
			}
		};
	});
