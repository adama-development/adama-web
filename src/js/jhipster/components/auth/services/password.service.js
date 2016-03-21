'use strict';

angular.module('adama-web').factory('Password', function($resource, jHipsterConstant) {
	return $resource(jHipsterConstant.apiBase + 'api/account/change_password', {}, {});
});

angular.module('adama-web').factory('PasswordResetInit', function($resource, jHipsterConstant) {
	return $resource(jHipsterConstant.apiBase + 'api/account/reset_password/init', {}, {});
});

angular.module('adama-web').factory('PasswordResetFinish', function($resource, jHipsterConstant) {
	return $resource(jHipsterConstant.apiBase + 'api/account/reset_password/finish', {}, {});
});
