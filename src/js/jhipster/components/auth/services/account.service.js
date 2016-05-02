'use strict';

angular.module('adama-web').factory('Account', function Account($resource, adamaConstant) {
	return $resource(adamaConstant.apiBase + 'api/account');
});
