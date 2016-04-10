# Page title

Page title (the title markup into the head part of the document) is outside page controller scope.
It is managed through a variable into the $rootScope (see src/js/app.js) :

	angular.module('adama-web').run(function($rootScope, $filter) {
		// change page title depending on current page
		var translateFn = $filter('translate');
		$rootScope.$on('$stateChangeSuccess', function(event, toState) {
			if (toState && toState.data && toState.data.pageTitle) {
				$rootScope.pageTitle = translateFn(toState.data.pageTitle);
			}
		});
	});

To define the page title, just add a reference in the route definition :

	$stateProvider.state('app.shirt', {
		url: '/my-route',
		templateUrl: 'my-template.html',
		controller: 'MyCtrl',
		controllerAs: 'ctrl',
		data: {
			pageTitle: 'MY_PAGE_TITLE_I18N_KEY'
		}
	});
