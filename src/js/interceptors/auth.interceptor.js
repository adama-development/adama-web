'use strict';

angular.module('adama-web').factory('authInterceptor', function($rootScope, $q, $location, localStorageService) {
	return {
		// Add authorization token to headers
		request: function(config) {
			config.headers = config.headers || {};
			var token = localStorageService.get('token');

			if (token && token.expires && token.expires > new Date().getTime()) {
				config.headers['x-auth-token'] = token.token;
			}

			return config;
		}
	};
});
