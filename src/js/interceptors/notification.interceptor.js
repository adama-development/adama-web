'use strict';

angular.module('adama-web').factory('notificationInterceptor', function($q, AlertService, adamaConstant) {
	return {
		response: function(response) {
			var alertKey = response.headers('X-' + adamaConstant.appModule + '-alert');
			if (angular.isString(alertKey)) {
				AlertService.success(alertKey, {
					param: response.headers('X-' + adamaConstant.appModule + '-params')
				});
			}
			return response;
		}
	};
});
