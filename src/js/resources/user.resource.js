'use strict';

angular.module('adama-web').factory('User', function($resource, adamaConstant, adamaResourceConfig) {
	var config = angular.extend({}, adamaResourceConfig, {
		// set specific resource config
	});
	return $resource(adamaConstant.apiBase + 'users/:id', {}, config);
});
