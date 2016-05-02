'use strict';

angular.module('adama-web').factory('notificationInterceptor', function($q, AlertService) {
	return {
		response: function(response) {
			var alertKey = response.headers('X-Adama-alert');
			if (angular.isString(alertKey)) {
				AlertService.success(alertKey, {
					param: response.headers('X-Adama-params')
				});
			}
			return response;
		}
	};
});
