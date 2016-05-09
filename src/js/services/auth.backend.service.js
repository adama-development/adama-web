/*jshint -W069 */
/*jscs:disable requireDotNotation*/
'use strict';

angular.module('adama-web').factory('authBackendService', function loginService($http, adamaConstant, adamaTokenService) {
	var api = {};

	api.login = function(credentials) {
		return $http.post(adamaConstant.apiBase + 'login/authenticate', {
			username: credentials.username,
			password: credentials.password
		}).then(function(response) {
			var data = response.data;
			adamaTokenService.setToken(data['access_token']);
			adamaTokenService.setRefreshToken(data['refresh_token']);
		});
	};

	api.logout = function() {
		adamaTokenService.setToken(undefined);
	};

	return api;
});
