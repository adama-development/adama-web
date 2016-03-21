'use strict';

angular.module('adama-web').config(function($stateProvider) {
	$stateProvider.state('app.user', {
		url: '/users',
		templateUrl: 'adama-web/user/user-list.html',
		controller: 'CrudListCtrl',
		controllerAs: 'ctrl',
		resolve: {
			EntityGenericResource: function(User) {
				return User;
			}
		},
		data: {
			pageTitle: 'USER_TITLE_LIST',
			authorities: ['ROLE_MANAGER', 'ROLE_ADMIN']
		}
	});

	var openModal = function($state, $uibModal, $stateParams, isEntityResolvable, controllerName, templateName) {
		var resolveEntity;
		if (isEntityResolvable) {
			resolveEntity = /* @ngInject */ function(User) {
				return User.get({
					login: $stateParams.login
				}).$promise;
			};
		}
		$uibModal.open({
			templateUrl: 'adama-web/user/' + templateName,
			resolve: {
				entity: resolveEntity,
				EntityGenericResource: function(User) {
					return User;
				}
			},
			controller: controllerName + ' as ctrl'
		}).result.then(function() {
			$state.go('^', {}, {
				reload: true
			});
		}).catch(function() {
			$state.go('^');
		});
	};

	$stateProvider.state('app.user.edit', {
		url: '/edit/:login',
		onEnter: function($state, $uibModal, $stateParams) {
			openModal($state, $uibModal, $stateParams, true, 'CrudEditCtrl', 'user-edit.html');
		},
		data: {
			pageTitle: 'USER_TITLE_EDIT',
			authorities: ['ROLE_MANAGER', 'ROLE_ADMIN']
		}
	});

	$stateProvider.state('app.user.create', {
		url: '/new',
		onEnter: function($state, $uibModal, $stateParams) {
			openModal($state, $uibModal, $stateParams, false, 'CrudEditCtrl', 'user-edit.html');
		},
		data: {
			pageTitle: 'USER_TITLE_NEW',
			authorities: ['ROLE_MANAGER', 'ROLE_ADMIN']
		}
	});

	$stateProvider.state('app.user.view', {
		url: '/view/:login',
		onEnter: function($state, $uibModal, $stateParams) {
			openModal($state, $uibModal, $stateParams, true, 'CrudViewCtrl', 'user-view.html');
		},
		data: {
			pageTitle: 'USER_TITLE_VIEW',
			authorities: ['ROLE_MANAGER', 'ROLE_ADMIN']
		}
	});

	$stateProvider.state('app.user.delete', {
		url: '/delete/:login',
		onEnter: function($state, $uibModal, $stateParams) {
			openModal($state, $uibModal, $stateParams, true, 'CrudDeleteCtrl', 'user-delete.html');
		},
		data: {
			pageTitle: 'USER_TITLE_DELETE',
			authorities: ['ROLE_MANAGER', 'ROLE_ADMIN']
		}
	});
});

angular.module('adama-web').config(function($translateProvider) {
	$translateProvider.translations('fr', {
		'USER_MENU': 'Utilisateurs',
		'USER_TITLE_DELETE': 'Suppression d\'un utilisateur',
		'USER_TITLE_VIEW': 'Détails d\'un utilisateur',
		'USER_TITLE_LIST': 'Liste des utilisateurs',
		'USER_TITLE_EDIT': 'Editer un utilisateur',
		'USER_TITLE_NEW': 'Créer un utilisateur',

		'USER_FORM_LOGIN': 'Identifiant',
		'USER_FORM_FIRSTNAME': 'Prénom',
		'USER_FORM_LASTNAME': 'Nom de famille',
		'USER_FORM_EMAIL': 'Email',
		'USER_FORM_LANGUAGE': 'Langue',
		'USER_FORM_AUTHORITIES': 'Rôles',

		'USER_LIST_LOGIN': 'Identifiant',
		'USER_LIST_MAIL': 'Email',
		'USER_LIST_LANGUAGE': 'Langue',
		'USER_LIST_AUTHORITIES': 'Rôle'
	});

	$translateProvider.translations('en', {
		'USER_MENU': 'Users',
		'USER_TITLE_DELETE': 'User delete',
		'USER_TITLE_VIEW': 'User details',
		'USER_TITLE_LIST': 'User list',
		'USER_TITLE_EDIT': 'User edition',
		'USER_TITLE_NEW': 'User creation',

		'USER_FORM_LOGIN': 'Login',
		'USER_FORM_FIRSTNAME': 'Firstname',
		'USER_FORM_LASTNAME': 'Lastname',
		'USER_FORM_EMAIL': 'Email',
		'USER_FORM_LANGUAGE': 'Language',
		'USER_FORM_AUTHORITIES': 'Authorities',

		'USER_LIST_LOGIN': 'Login',
		'USER_LIST_MAIL': 'Email',
		'USER_LIST_LANGUAGE': 'Language',
		'USER_LIST_AUTHORITIES': 'Authorities'
	});
});
