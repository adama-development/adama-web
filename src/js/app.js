'use strict';

angular.module('adama-web', [ //
	'ngSanitize', //
	'ngMessages', //
	'ui.router', //
	'ui.bootstrap', //
	'pascalprecht.translate', //
	'ngCookies', //
	'ngResource', //
	'LocalStorageModule', //
	'ngTable', //
	'ngFileSaver', //
	'angular-loading-bar' //
]);

angular.module('adama-web').config(function($urlRouterProvider) {
	$urlRouterProvider.otherwise('/app/');
});

angular.module('adama-web').run(function($rootScope) {
	// change body class depending on application main state (app or login)
	$rootScope.additionalBodyClass = 'sidebar-mini';

	$rootScope.$on('$stateChangeSuccess', function(event, toState) {
		if (toState && toState.name && toState.name.indexOf('auth') === 0) {
			$rootScope.additionalBodyClass = 'login-page';
		} else {
			$rootScope.additionalBodyClass = 'sidebar-mini';
		}
	});
});

angular.module('adama-web').run(function($rootScope, appGlobal) {
	// change page title depending on current page
	$rootScope.$on('$stateChangeSuccess', function(event, toState) {
		if (toState && toState.data && toState.data.pageTitle) {
			appGlobal.setPageTitle(toState.data.pageTitle);
		}
	});
});

angular.module('adama-web').config(function($translateProvider) {
	$translateProvider.useSanitizeValueStrategy('escapeParameters');

	$translateProvider.useLocalStorage();

	$translateProvider.registerAvailableLanguageKeys(['en', 'fr'], {
		'en_*': 'en',
		'fr_*': 'fr'
	});

	$translateProvider.determinePreferredLanguage();
});

angular.module('adama-web').config(function($stateProvider) {
	$stateProvider.state('app', {
		abstract: true,
		url: '/app',
		template: '' + //
			'<div class="wrapper">' + //
			'	<ark-header></ark-header>' + //
			'	<aside class="main-sidebar">' + //
			'		<section class="sidebar">' + //
			'			<main-navigation></main-navigation>' + //
			'		</section>' + //
			'	</aside>' + //
			'	<jh-alert></jh-alert>' + //
			'	<ui-view></ui-view>' + //
			'	<ark-footer></ark-footer>' + //
			'	<layout-fix add-event="true"></layout-fix>' + //
			'</div>' + //
			'',
		resolve: {
			authorize: function(Auth) {
				return Auth.authorize();
			}
		}
	});
});

angular.module('adama-web').run(function(ngTableDefaults) {
	ngTableDefaults.settings = angular.extend({}, ngTableDefaults.settings, {
		counts: [10, 20, 50]
	});
	ngTableDefaults.params = angular.extend({}, ngTableDefaults.params, {
		// init : show first page
		page: 1,
		// init : count per page
		count: 20
	});
});

angular.module('adama-web').config(function($translateProvider) {
	$translateProvider.translations('fr', {
		'MENU_CATEGORY_USERS': 'Utilisateurs',
		'PAGER_RESULT': '{{ total }} entrées',
		'FLAG_EN': 'Anglais',
		'FLAG_CN': 'Chinois',
		'FLAG_FR': 'Français'
	});

	$translateProvider.translations('en', {
		'MENU_CATEGORY_USERS': 'Users',
		'PAGER_RESULT': '{{ total }} entries',
		'FLAG_EN': 'English',
		'FLAG_CN': 'Chinese',
		'FLAG_FR': 'French'
	});
});
