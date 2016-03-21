'use strict';

angular.module('adama-web').config(function($stateProvider) {
	$stateProvider.state('app.personal', {
		abstract: true,
		url: '/personal',
		template: '<ui-view></ui-view>'
	});
});
