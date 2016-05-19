'use strict';

angular.module('adama-web').factory('Auth', function Auth($rootScope, $state, $q, $translate, Principal, authBackendService) {
	var api = {};

	api.login = function(credentials) {
		var deferred = $q.defer();

		authBackendService.login(credentials).then(function(data) {
			// retrieve the logged account information
			Principal.identity(true).then(function(account) {
				// After the login the language will be changed to
				// the language selected by the user during his
				// registration
				if (account.langKey) {
					$translate.use(account.langKey);
				}
				deferred.resolve(data);
			});
		}).catch(function(err) {
			api.logout();
			deferred.reject(err);
		});

		return deferred.promise;
	};

	api.logout = function() {
		authBackendService.logout();
		Principal.authenticate(null);
		// Reset state memory
		$rootScope.previousStateName = undefined;
		$rootScope.previousStateNameParams = undefined;
	};

	return api;
});
