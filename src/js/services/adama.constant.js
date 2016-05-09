'use strict';

angular.module('adama-web').constant('adamaConstant', {
	apiBase: 'http://localhost:13337/',
	adamaWebToolkitTemplateUrl: {
		// TODO
	},
	authorities: ['ROLE_ADMIN', 'ROLE_USER', 'ROLE_MANAGER'],
	userAuthorities: ['ROLE_MANAGER', 'ROLE_ADMIN'],
	urlCreatePassword: 'replace/me/with/your/project/specific/url/reset-password.html?origin=front'
});
