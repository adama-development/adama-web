'use strict';

angular.module('adama-web').factory('authExpiredInterceptor', function($rootScope, $q, $injector, localStorageService) {
	return {
		responseError : function(response) {
			// token has expired
			if (response.status === 401 && (response.data.error === 'invalid_token' || response.data.error === 'Unauthorized')) {
				localStorageService.remove('token');
				var Principal = $injector.get('Principal');
				if (Principal.isAuthenticated()) {
					var Auth = $injector.get('Auth');
					Auth.authorize(true);
				}
			}
			return $q.reject(response);
		}
	};
});
