# Page title

Page title (the title markup into the head part of the document) is outside page controller scope.
It is managed through a variable into the $rootScope.
To control its use, a  service has been created : app/scripts/services/appGlobal.js

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
