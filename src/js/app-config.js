'use strict';

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

angular.module('adama-web').run(function($rootScope, $filter) {
	// change page title depending on current page
	var translateFn = $filter('translate');
	$rootScope.$on('$stateChangeSuccess', function(event, toState) {
		if (toState && toState.data && toState.data.pageTitle) {
			$rootScope.pageTitle = translateFn(toState.data.pageTitle);
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
			'	<adama-alert></adama-alert>' + //
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
		'PAGER_RESULT': '{{ firstItemIdx }}-{{ lastItemIdx | min:total }} sur {{ total }} entrées',
		'FLAG_EN': 'Anglais',
		'FLAG_CN': 'Chinois',
		'FLAG_FR': 'Français',
		'FILEUPLOAD_DROPZONE_LABEL': 'Déposez un fichier XLS pour le téléverser ou cliquez sur la zone pour sélectionner un fichier XLS.',
		'FILEUPLOAD_DROPZONE_LABEL_DROP': 'Vous pouvez déposer le fichier.',
		'FILEUPLOAD_RESET': 'Retirer le fichier sélectionné et faire une nouvelle sélection.'
	});

	$translateProvider.translations('en', {
		'MENU_CATEGORY_USERS': 'Users',
		'PAGER_RESULT': '{{ firstItemIdx }}-{{ lastItemIdx | min:total }} on {{ total }} entries',
		'FLAG_EN': 'English',
		'FLAG_CN': 'Chinese',
		'FLAG_FR': 'French',
		'FILEUPLOAD_DROPZONE_LABEL': 'Drop a XLS file on this area to upload it or click the area to select a XLS file.',
		'FILEUPLOAD_DROPZONE_LABEL_DROP': 'You can now drop the file',
		'FILEUPLOAD_RESET': 'Remove selected file and start over.'
	});
});

angular.module('adama-web').run(function($rootScope, $state, Principal, Auth) {
	$rootScope.$on('$stateChangeStart', function(event, toState, toStateParams) {
		$rootScope.toState = toState;
		$rootScope.toStateParams = toStateParams;
		if (Principal.isIdentityResolved()) {
			Auth.authorize();
		}
	});

	$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
		// Remember previous state unless we've been redirected to login or we've just
		// reset the state memory after logout. If we're redirected to login, our
		// previousState is already set in the authExpiredInterceptor. If we're going
		// to login directly, we don't want to be sent to some previous state anyway
		if (toState.name !== 'auth.signin' && $rootScope.previousStateName) {
			$rootScope.previousStateName = fromState.name;
			$rootScope.previousStateParams = fromParams;
		}
	});
});

angular.module('adama-web').config(function($httpProvider) {
	$httpProvider.interceptors.push('errorHandlerInterceptor');
	$httpProvider.interceptors.push('authExpiredInterceptor');
	$httpProvider.interceptors.push('authInterceptor');
	$httpProvider.interceptors.push('notificationInterceptor');
});
