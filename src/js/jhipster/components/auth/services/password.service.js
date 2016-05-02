'use strict';

angular.module('adama-web').factory('Password', function($resource, adamaConstant) {
	return $resource(adamaConstant.apiBase + 'api/account/change_password', {}, {});
});

angular.module('adama-web').factory('PasswordResetInit', function($resource, adamaConstant) {
	return $resource(adamaConstant.apiBase + 'api/account/reset_password/init', {}, {});
});

angular.module('adama-web').factory('PasswordResetFinish', function($resource, adamaConstant) {
	return $resource(adamaConstant.apiBase + 'api/account/reset_password/finish', {}, {});
});
