'use strict';

angular.module('adama-toolkit').factory('appGlobal', function($rootScope, $translate) {
	var api = {};
	api.setPageTitle = function(pageTitle) {
		$translate(pageTitle).then(function(i18nPageTitle) {
			$rootScope.pageTitle = i18nPageTitle;
		});
	};
	return api;
});
