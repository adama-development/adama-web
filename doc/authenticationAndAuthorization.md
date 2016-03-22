# Authentication and authorization

WORK IN PROGRESS !!!!



## Authentication

In src/js/jhipster/app.js : resolve on abstract root route triggering authorization : Auth.authorize().



## Authorization

To secure a route, add a data object on route definition with an authorities property :

	angular.module('cottonMeApp').config(function($stateProvider) {
		$stateProvider.state('app.main', {
			url: '/',
			templateUrl: 'modules/main/main.html',
			controller: 'MainCtrl',
			controllerAs: 'ctrl',
			data: {
				authorities: ['ROLE_MANAGER'],
				pageTitle: 'HOME'
			}
		});
	});
