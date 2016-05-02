'use strict';

angular.module('adama-web').factory('errorHandlerInterceptor', function($q, $rootScope) {
	return {
		'responseError': function(response) {
			if (!(response.status === 401 && response.data === 'Bad credentials')) {
				$rootScope.$emit('Adama.httpError', response);
			}
			return $q.reject(response);
		}
	};
});
