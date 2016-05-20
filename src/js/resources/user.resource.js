'use strict';

angular.module('adama-web').factory('User', function($resource, adamaConstant, adamaResourceConfig) {
	var config = angular.extend({}, adamaResourceConfig, {
		save: {
			method: 'POST',
			params: {
				urlCreatePassword: '@urlCreatePassword'
			}
		}
	});
	return $resource(adamaConstant.apiBase + 'users/:id', {}, config);
});
