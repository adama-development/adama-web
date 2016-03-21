'use strict';

angular.module('adamaDemoApp').config(function($translateProvider) {
	$translateProvider.translations('fr', {
		'APP_NAME': 'Adama Demo',
		'APP_NAME_SHORT': 'AD'
	});

	$translateProvider.translations('en', {
		'APP_NAME': 'Adama Demo',
		'APP_NAME_SHORT': 'AD'
	});
});

angular.module('adamaDemoApp').config(function(jHipsterConstant) {
	jHipsterConstant.appModule = 'adamaDemoApp';
});
