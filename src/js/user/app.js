'use strict';

angular.module('adama-web').config(function($stateProvider, adamaConstant) {
	$stateProvider.state('app.user', {
		abstract: true,
		url: '/users',
		template: '<ui-view></ui-view>'
	});

	$stateProvider.state('app.user.list', {
		url: '',
		templateUrl: function() {
			return adamaConstant.adamaWebToolkitTemplateUrl.users;
		},
		controller: 'CrudListCtrl',
		controllerAs: 'ctrl',
		resolve: {
			EntityGenericResource: function(User) {
				return User;
			}
		},
		data: {
			pageTitle: 'USER_TITLE_LIST',
			authorities: adamaConstant.userAuthorities
		}
	});

	$stateProvider.state('app.user.view', {
		url: '/view/:entityId',
		templateUrl: function() {
			return adamaConstant.adamaWebToolkitTemplateUrl.userView;
		},
		controller: 'CrudViewCtrl',
		controllerAs: 'ctrl',
		resolve: {
			entity: function($stateParams, User) {
				return User.get({
					id: $stateParams.entityId
				}).$promise;
			}
		},
		data: {
			pageTitle: 'USER_TITLE_VIEW',
			authorities: adamaConstant.userAuthorities
		}
	});

	$stateProvider.state('app.user.edit', {
		url: '/edit/:entityId',
		templateUrl: function() {
			return adamaConstant.adamaWebToolkitTemplateUrl.userEdit;
		},
		controller: 'CrudEditCtrl',
		controllerAs: 'ctrl',
		resolve: {
			entity: function($stateParams, User) {
				return User.get({
					id: $stateParams.entityId
				}).$promise;
			},
			EntityGenericResource: function(User) {
				return User;
			}
		},
		data: {
			pageTitle: 'USER_TITLE_EDIT',
			authorities: adamaConstant.userAuthorities
		}
	});

	$stateProvider.state('app.user.create', {
		url: '/new',
		templateUrl: function() {
			return adamaConstant.adamaWebToolkitTemplateUrl.userCreate;
		},
		controller: 'CrudEditCtrl',
		controllerAs: 'ctrl',
		resolve: {
			entity: function() {
				return undefined;
			},
			EntityGenericResource: function(User) {
				return User;
			}
		},
		data: {
			pageTitle: 'USER_TITLE_NEW',
			authorities: adamaConstant.userAuthorities
		}
	});

	var openModal = function($state, $uibModal, $stateParams, controllerName, templateUrl, title) {
		var resolveEntity;
		if ($stateParams) {
			resolveEntity = /* @ngInject */ function(User) {
				return User.get({
					id: $stateParams.entityId
				}).$promise;
			};
		}
		$uibModal.open({
			templateUrl: templateUrl,
			resolve: {
				entity: resolveEntity,
				EntityGenericResource: function(User) {
					return User;
				},
				title: function() {
					return title;
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

	$stateProvider.state('app.user.delete', {
		url: '/delete/:entityId',
		parent: 'app.user.list',
		onEnter: function($state, $uibModal, $stateParams, adamaConstant) {
			openModal($state, $uibModal, $stateParams, 'CrudDeleteCtrl', adamaConstant.adamaWebToolkitTemplateUrl.userDelete, 'USER_TITLE_DELETE');
		},
		data: {
			pageTitle: 'USER_TITLE_DELETE',
			authorities: adamaConstant.userAuthorities
		}
	});

	$stateProvider.state('app.user.importXls', {
		url: '/import-xls',
		parent: 'app.user.list',
		onEnter: function($state, $uibModal, adamaConstant) {
			openModal($state, $uibModal, undefined, 'CrudImportXlsCtrl', adamaConstant.adamaWebToolkitTemplateUrl.usersImportXls, 'USER_TITLE_IMPORT_XLS');
		},
		data: {
			pageTitle: 'USER_TITLE_IMPORT_XLS',
			authorities: adamaConstant.userAuthorities
		}
	});

	$stateProvider.state('app.user.exportXls', {
		url: '/export-xls',
		parent: 'app.user.list',
		onEnter: function($state, $uibModal, adamaConstant) {
			openModal($state, $uibModal, undefined, 'CrudExportXlsCtrl', adamaConstant.adamaWebToolkitTemplateUrl.usersExportXls, 'USER_TITLE_EXPORT_XLS');
		},
		data: {
			pageTitle: 'USER_TITLE_EXPORT_XLS',
			authorities: adamaConstant.userAuthorities
		}
	});
});

angular.module('adama-web').config(function($translateProvider) {
	$translateProvider.translations('fr', {
		error: {
			userexists: 'Login déjà utilisé !',
			emailexists: 'E-mail déjà utilisé !'
		},
		'USER_MENU': 'Utilisateurs',
		'USER_TITLE_DELETE': 'Suppression d\'un utilisateur',
		'USER_TITLE_VIEW': 'Détails d\'un utilisateur',
		'USER_TITLE_LIST': 'Liste des utilisateurs',
		'USER_TITLE_EDIT': 'Editer un utilisateur',
		'USER_TITLE_NEW': 'Créer un utilisateur',
		'USER_TITLE_IMPORT_XLS': 'Importer en masse des utilisateurs',
		'USER_TITLE_EXPORT_XLS': 'Exporter en masse des utilisateurs',

		'USER_FORM_LOGIN': 'Identifiant',
		'USER_FORM_FIRSTNAME': 'Prénom',
		'USER_FORM_LASTNAME': 'Nom de famille',
		'USER_FORM_EMAIL': 'Email',
		'USER_FORM_LANGUAGE': 'Langue',
		'USER_FORM_AUTHORITY': 'Rôle',

		'USER_LIST_LOGIN': 'Identifiant',
		'USER_LIST_MAIL': 'Email',
		'USER_LIST_LANGUAGE': 'Langue',
		'USER_LIST_AUTHORITY': 'Rôle'
	});

	$translateProvider.translations('en', {
		error: {
			userexists: 'Login name already used!',
			emailexists: 'E-mail is already in use!'
		},
		'USER_MENU': 'Users',
		'USER_TITLE_DELETE': 'User delete',
		'USER_TITLE_VIEW': 'User details',
		'USER_TITLE_LIST': 'User list',
		'USER_TITLE_EDIT': 'User edition',
		'USER_TITLE_NEW': 'User creation',
		'USER_TITLE_IMPORT_XLS': 'Users mass import',
		'USER_TITLE_EXPORT_XLS': 'Users mass export',

		'USER_FORM_LOGIN': 'Login',
		'USER_FORM_FIRSTNAME': 'Firstname',
		'USER_FORM_LASTNAME': 'Lastname',
		'USER_FORM_EMAIL': 'Email',
		'USER_FORM_LANGUAGE': 'Language',
		'USER_FORM_AUTHORITY': 'Authority',

		'USER_LIST_LOGIN': 'Login',
		'USER_LIST_MAIL': 'Email',
		'USER_LIST_LANGUAGE': 'Language',
		'USER_LIST_AUTHORITY': 'Authority'
	});
});
