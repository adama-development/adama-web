'use strict';

angular.module('adama-toolkit').factory('Password', function($resource, jHipsterConstant) {
	return $resource(jHipsterConstant.apiBase + 'api/account/change_password', {}, {});
});

angular.module('adama-toolkit').factory('PasswordResetInit', function($resource, jHipsterConstant) {
	return $resource(jHipsterConstant.apiBase + 'api/account/reset_password/init', {}, {});
});

angular.module('adama-toolkit').factory('PasswordResetFinish', function($resource, jHipsterConstant) {
	return $resource(jHipsterConstant.apiBase + 'api/account/reset_password/finish', {}, {});
});
