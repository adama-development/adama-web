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
	'ngFileUpload', //
	'angular-loading-bar' //
]);

angular.module('adama-web').config(["$urlRouterProvider", function($urlRouterProvider) {
	$urlRouterProvider.otherwise('/app/');
}]);

angular.module('adama-web').run(["$rootScope", function($rootScope) {
	// change body class depending on application main state (app or login)
	$rootScope.additionalBodyClass = 'sidebar-mini';

	$rootScope.$on('$stateChangeSuccess', function(event, toState) {
		if (toState && toState.name && toState.name.indexOf('auth') === 0) {
			$rootScope.additionalBodyClass = 'login-page';
		} else {
			$rootScope.additionalBodyClass = 'sidebar-mini';
		}
	});
}]);

angular.module('adama-web').run(["$rootScope", "$filter", function($rootScope, $filter) {
	// change page title depending on current page
	var translateFn = $filter('translate');
	$rootScope.$on('$stateChangeSuccess', function(event, toState) {
		if (toState && toState.data && toState.data.pageTitle) {
			$rootScope.pageTitle = translateFn(toState.data.pageTitle);
		}
	});
}]);

angular.module('adama-web').config(["$translateProvider", function($translateProvider) {
	$translateProvider.useSanitizeValueStrategy('escapeParameters');

	$translateProvider.useLocalStorage();

	$translateProvider.registerAvailableLanguageKeys(['en', 'fr'], {
		'en_*': 'en',
		'fr_*': 'fr'
	});

	$translateProvider.determinePreferredLanguage();
}]);

angular.module('adama-web').config(["$stateProvider", function($stateProvider) {
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
			authorize: ["Auth", function(Auth) {
				return Auth.authorize();
			}]
		}
	});
}]);

angular.module('adama-web').run(["ngTableDefaults", function(ngTableDefaults) {
	ngTableDefaults.settings = angular.extend({}, ngTableDefaults.settings, {
		counts: [10, 20, 50]
	});
	ngTableDefaults.params = angular.extend({}, ngTableDefaults.params, {
		// init : show first page
		page: 1,
		// init : count per page
		count: 20
	});
}]);

angular.module('adama-web').config(["$translateProvider", function($translateProvider) {
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
}]);

'use strict';

angular.module('adama-web').config(["$stateProvider", function($stateProvider) {
	$stateProvider.state('app.personal', {
		abstract: true,
		url: '/personal',
		template: '<ui-view></ui-view>'
	});
}]);

'use strict';

'use strict';

angular.module('adama-web').controller('AccessDeniedCtrl', function() {
	// nothing to do
});

'use strict';

angular.module('adama-web').config(["$stateProvider", function($stateProvider) {
	$stateProvider.state('auth', {
		abstract: true,
		url: '/auth',
		template: '' + //
			'<ui-view></ui-view>' + //
			''
	});

	$stateProvider.state('auth.signin', {
		url: '/',
		templateUrl: 'adama-web/auth/signin.html',
		controller: 'SigninCtrl',
		controllerAs: 'ctrl',
		data: {
			pageTitle: 'SIGNIN',
			authorities: []
		}
	});

	$stateProvider.state('auth.recoverPassword', {
		url: '/recoverPassword',
		templateUrl: 'adama-web/auth/recoverPassword.html',
		controller: 'RecoverPasswordCtrl',
		controllerAs: 'ctrl',
		data: {
			pageTitle: 'RECOVER',
			authorities: []
		}
	});

	$stateProvider.state('auth.accessDenied', {
		url: '/accessDenied',
		templateUrl: 'adama-web/auth/accessDenied.html',
		controller: 'AccessDeniedCtrl',
		controllerAs: 'ctrl',
		data: {
			pageTitle: 'ACCESS_DENIED',
			authorities: []
		}
	});
}]);

angular.module('adama-web').config(["$translateProvider", function($translateProvider) {
	$translateProvider.translations('fr', {
		'SIGNIN': 'Identification',
		'SIGNIN_INTRO': 'Identifiez-vous pour démarrer votre session',
		'SIGNIN_FORGET_PASSWORD': 'J\'ai oublié mon mot de passe ...',
		'SIGNIN_USERNAME': 'Identifiant',
		'SIGNIN_USERNAME_REQUIRED': 'L\'identifiant est obligatoire',
		'SIGNIN_PASSWORD': 'Mot de passe',
		'SIGNIN_PASSWORD_REQUIRED': 'Le mot de passe est obligatoire',
		'SIGNIN_SUBMIT': 'Démarrer la session',
		'SIGNIN_ERROR': 'Erreur d\'authentification : identifiant ou mot de passe incorrect.',
		'RECOVER': 'Récupération de mot de passe',
		'RECOVER_INTRO': 'Saisissez votre email pour récupérer votre mot de passe',
		'RECOVER_MAIL': 'Email',
		'RECOVER_MAIL_REQUIRED': 'L\'email est obligatoire',
		'RECOVER_MAIL_EMAIL': 'L\'email n\'est pas au bon format',
		'RECOVER_SUBMIT': 'Récupérer mon mot de passe',
		'RECOVER_BACK_TO_LOGIN': 'Retour à l\'identificaition',
		'RECOVER_SUCCESS': 'Consultez votre email pour connaître comment réinitialiser votre mot de passe.',
		'RECOVER_ERROR': 'Erreur lors de la récupération du mot de passe.',
		'RECOVER_ERROR_EMAIL_NOT_EXIST': 'L\'email n\'existe pas',
		'ACCESS_DENIED': 'Accès interdit',
		'ACCESS_DENIED_INTRO': 'Vous n\'avez pas suffisamment de droits d\'accéder à cette page.'
	});

	$translateProvider.translations('en', {
		'SIGNIN': 'Signin',
		'SIGNIN_INTRO': 'Sign in to start your session',
		'SIGNIN_FORGET_PASSWORD': 'I forgot my password ...',
		'SIGNIN_USERNAME': 'Username',
		'SIGNIN_USERNAME_REQUIRED': 'Username is required',
		'SIGNIN_PASSWORD': 'Password',
		'SIGNIN_PASSWORD_REQUIRED': 'Password is required',
		'SIGNIN_SUBMIT': 'Start session',
		'SIGNIN_ERROR': 'Authentication error : Username or password are incorrect.',
		'RECOVER': 'Recover password',
		'RECOVER_INTRO': 'Set your email to recover your password',
		'RECOVER_MAIL': 'Email',
		'RECOVER_MAIL_REQUIRED': 'Email is required',
		'RECOVER_MAIL_EMAIL': 'Email does not respect the right format',
		'RECOVER_SUBMIT': 'Retrieve my password',
		'RECOVER_BACK_TO_LOGIN': 'Back to signin',
		'RECOVER_SUCCESS': 'Check your e-mails for details on how to reset your password.',
		'RECOVER_ERROR': 'Recovering error.',
		'RECOVER_ERROR_EMAIL_NOT_EXIST': 'E-Mail address isn\'t registered! Please check and try again',
		'ACCESS_DENIED': 'Access denied',
		'ACCESS_DENIED_INTRO': 'You do not have enough privileges to access this page.'
	});
}]);

'use strict';

angular.module('adama-web').controller('RecoverPasswordCtrl', ["Auth", function(Auth) {
	var ctrl = this;
	ctrl.recover = function(userEmail) {
		ctrl.recoverSuccess = false;
		ctrl.recoverError = false;
		ctrl.errorEmailNotExists = false;
		ctrl.loading = true;
		Auth.resetPasswordInit(userEmail).then(function() {
			ctrl.recoverSuccess = true;
		}).catch(function(response) {
			if (response.status === 400 && response.data === 'e-mail address not registered') {
				ctrl.errorEmailNotExists = true;
			} else {
				ctrl.recoverError = true;
			}
		}).finally(function() {
			ctrl.loading = false;
		});
	};
}]);

'use strict';

angular.module('adama-web').controller('SigninCtrl', ["$rootScope", "$state", "Auth", function($rootScope, $state, Auth) {
	var ctrl = this;
	ctrl.signin = function(userName, userPassword) {
		ctrl.authenticationError = false;
		Auth.login({
			username: userName,
			password: userPassword
		}).then(function() {
			if ($rootScope.previousStateName === 'auth.signin') {
				$state.go('app.main');
			} else {
				$rootScope.back();
			}
		}).catch(function() {
			ctrl.authenticationError = true;
		});
	};
}]);

'use strict';

angular.module('adama-web').config(["$translateProvider", function($translateProvider) {
	$translateProvider.translations('fr', {
		'CRUD_BACK_TO_LIST': 'Retour à la liste',
		'CRUD_CANCEL': 'Annuler',
		'CRUD_CONFIRM_DELETE': 'Confirmer la suppression',
		'CRUD_CONFIRM_EDIT': 'Editer',
		'CRUD_CONFIRM_EXPORT': 'Confirmer l\'export',
		'CRUD_CONFIRM_IMPORT': 'Confirmer l\'import',
		'CRUD_CONFIRM_SAVE': 'Créer',
		'CRUD_DELETE_MESSAGE': 'Etes-vous certain de vouloir supprimer ?',
		'CRUD_DELETE_SUCCESS': 'Suppression avec succès.',
		'CRUD_DELETE_ERROR': 'Erreur, impossible de supprimer.',
		'CRUD_EXPORT_XLS_MESSAGE': 'Vous vous apprétez à exporter toutes les données dans une feuille de calcul Excel (XLS).',
		'CRUD_EXPORT_XLS_SUCCESS': 'Exportation avec succès.',
		'CRUD_EXPORT_XLS_ERROR': 'Erreur, impossible d\'exporter.',
		'CRUD_IMPORT_XLS_MESSAGE': 'Sélectionnez un fichier Excel puis validez pour un import massif de données.',
		'CRUD_IMPORT_XLS_SUCCESS': 'Importation avec succès.',
		'CRUD_IMPORT_XLS_ERROR': 'Erreur, impossible d\'importer.',
		'CRUD_NEW': 'Nouveau',
		'CRUD_MASS_IMPORT': 'Import massif',
		'CRUD_MASS_EXPORT': 'Export massif',
		'CRUD_EDIT_SUCCESS': 'Enregistrement avec succès.',
		'CRUD_NEW_SUCCESS': 'Création avec succès.',
		'CRUD_SAVE_ERROR': 'Erreur, impossible de sauvegarder.',
		'CRUD_FORM_ERROR_REQUIRED': 'Le champs est obligatoire.',
		'CRUD_FORM_ERROR_MAXLENGTH': 'Le champs ne doit pas dépasser {{ maxlength }} caractères.',
		'CRUD_FORM_ERROR_EMAIL': 'Le format est invalide.',
		'CRUD_FORM_SEARCH': 'Recherche',
		'CRUD_FORM_SEARCH_SUBMIT': 'Rechercher',
		'CRUD_ACTION_VIEW': 'Détails',
		'CRUD_ACTION_EDIT': 'Editer',
		'CRUD_ACTION_DELETE': 'Supprimer'
	});

	$translateProvider.translations('en', {
		'CRUD_BACK_TO_LIST': 'Back to list',
		'CRUD_CANCEL': 'Cancel',
		'CRUD_CONFIRM_DELETE': 'Confirm delete',
		'CRUD_CONFIRM_EDIT': 'Edit',
		'CRUD_CONFIRM_EXPORT': 'Confirm export',
		'CRUD_CONFIRM_IMPORT': 'Confirm import',
		'CRUD_CONFIRM_SAVE': 'Save',
		'CRUD_DELETE_MESSAGE': 'Are you sure you want to delete ?',
		'CRUD_DELETE_SUCCESS': 'Delete successfull.',
		'CRUD_DELETE_ERROR': 'Error, impossible to delete.',
		'CRUD_EXPORT_XLS_MESSAGE': 'You\'re about to export all the data into an Excel spreadsheet (XLS).',
		'CRUD_EXPORT_XLS_SUCCESS': 'Export successfull.',
		'CRUD_EXPORT_XLS_ERROR': 'Error, impossible to export.',
		'CRUD_IMPORT_XLS_MESSAGE': 'Select an Excel file and submit in order to mass import data.',
		'CRUD_IMPORT_XLS_SUCCESS': 'Import successfull.',
		'CRUD_IMPORT_XLS_ERROR': 'Error, impossible to import.',
		'CRUD_NEW': 'New',
		'CRUD_MASS_IMPORT': 'Mass import',
		'CRUD_MASS_EXPORT': 'Mass export',
		'CRUD_EDIT_SUCCESS': 'Save successfull.',
		'CRUD_NEW_SUCCESS': 'Creation successful.',
		'CRUD_SAVE_ERROR': 'Error, impossible to save.',
		'CRUD_FORM_ERROR_REQUIRED': 'This field is required.',
		'CRUD_FORM_ERROR_MAXLENGTH': 'This field cannot be longer than {{ maxlength }} characters.',
		'CRUD_FORM_ERROR_EMAIL': 'Format is invalid.',
		'CRUD_FORM_SEARCH': 'Search',
		'CRUD_FORM_SEARCH_SUBMIT': 'Search',
		'CRUD_ACTION_VIEW': 'View details',
		'CRUD_ACTION_EDIT': 'Edit',
		'CRUD_ACTION_DELETE': 'Delete'
	});
}]);

'use strict';

angular.module('adama-web').component('btnCreate', {
	templateUrl: 'adama-web/crud/btn-create.html',
	transclude: true,
	bindings: {
		disableCreate: '<',
		disableMassImport: '<',
		disableMassExport: '<',
		disableAdditionnalAction: '<'
	}
});

'use strict';

angular.module('adama-web').component('crudActionDropdown', {
	bindings: {
		routeMapping: '<',
		disableView: '<',
		disableEdit: '<',
		disableDelete: '<'
	},
	templateUrl: 'adama-web/crud/crud-action-dropdown.html'
});

'use strict';

angular.module('adama-web').component('crudCustomFilter', {
	templateUrl: 'adama-web/crud/crud-custom-filter.html',
	bindings: {
		tableParams: '<',
		searchValue: '<',
		labelKey: '@'
	},
	controller: function() {
		var ctrl = this;
		ctrl.displayFiltered = function() {
			ctrl.tableParams.filter({
				business: ctrl.searchValue
			});
			ctrl.tableParams.page(1);
			ctrl.tableParams.reload();
		};
	}
});

'use strict';

angular.module('adama-web').controller('CrudDeleteCtrl', ["$scope", "entity", "AlertService", function($scope, entity, AlertService) {
	var ctrl = this;
	ctrl.dismiss = function() {
		$scope.$dismiss();
	};
	ctrl.confirmDelete = function() {
		entity.$delete().then(function() {
			AlertService.success('CRUD_DELETE_SUCCESS');
			$scope.$close();
		}).catch(function() {
			AlertService.error('CRUD_DELETE_ERROR');
		});
	};
}]);

'use strict';

angular.module('adama-web').controller('CrudEditCtrl', ["$scope", "entity", "EntityGenericResource", "AlertService", function($scope, entity, EntityGenericResource, AlertService) {
	var ctrl = this;
	ctrl.isEdition = !!entity;
	ctrl.entity = entity;
	ctrl.dismiss = function() {
		$scope.$dismiss();
	};
	ctrl.save = function() {
		var resourceAction;
		if (ctrl.isEdition) {
			resourceAction = EntityGenericResource.update;
		} else {
			resourceAction = EntityGenericResource.save;
		}
		resourceAction(ctrl.entity).$promise.then(function(newEntity) {
			if (ctrl.isEdition) {
				AlertService.success('CRUD_EDIT_SUCCESS');
			} else {
				AlertService.success('CRUD_NEW_SUCCESS');
			}
			$scope.$close(newEntity);
		});
	};
}]);

'use strict';

angular.module('adama-web').controller('CrudExportXlsCtrl', ["$scope", "AlertService", "EntityGenericResource", function($scope, AlertService, EntityGenericResource) {
	var ctrl = this;
	ctrl.dismiss = function() {
		$scope.$dismiss();
	};
	ctrl.loading = false;
	ctrl.confirmExportXls = function() {
		ctrl.loading = true;
		EntityGenericResource.massExportXls().$promise.then(function(newEntity) {
			AlertService.success('CRUD_EXPORT_XLS_SUCCESS');
			$scope.$close(newEntity);
		}).catch(function() {
			AlertService.error('CRUD_EXPORT_XLS_ERROR');
		}).finally(function() {
			ctrl.loading = false;
		});
	};
}]);

'use strict';

angular.module('adama-web').controller('CrudImportXlsCtrl', ["$scope", "AlertService", "EntityGenericResource", function($scope, AlertService, EntityGenericResource) {
	var ctrl = this;

	ctrl.dismiss = function() {
		$scope.$dismiss();
	};

	ctrl.loading = false;
	ctrl.confirmImportXls = function() {
		var file = ctrl.file;
		ctrl.loading = true;
		EntityGenericResource.massImportXls({
			file: file
		}).$promise.then(function() {
			AlertService.success('CRUD_IMPORT_XLS_SUCCESS');
			$scope.$close();
		}, function() {
			AlertService.error('CRUD_IMPORT_XLS_ERROR');
		}).finally(function() {
			ctrl.loading = false;
		});
	};
}]);

'use strict';

angular.module('adama-web').controller('CrudListCtrl', ["EntityGenericResource", "NgTableParams", function(EntityGenericResource, NgTableParams) {
	// TODO filter search results
	var ctrl = this;

	// search data
	ctrl.tableParams = new NgTableParams({}, {
		total: 0,
		getData: function($defer, params) {
			var sort = params.sorting();
			var sortValues = [];
			if (!angular.equals({}, sort)) {
				for (var key in sort) {
					if (sort.hasOwnProperty(key)) {
						sortValues.push(key + ',' + sort[key]);
					}
				}
			}
			var requestParams = angular.extend({}, {
				page: params.page() - 1,
				size: params.count(),
				sort: sortValues,
				search: params.filter().$
			}, params.filter().business);
			EntityGenericResource.query(requestParams).$promise.then(function(entities) {
				params.total(entities.$metadata.totalItems);
				$defer.resolve(entities);
			});
		}
	});
}]);

'use strict';

angular.module('adama-web').component('crudSearchField', {
	templateUrl: 'adama-web/crud/crud-search-field.html',
	bindings: {
		tableParams: '<'
	},
	controller: function() {
		var ctrl = this;
		ctrl.search = function() {
			ctrl.tableParams.filter({
				$: ctrl.searchValue
			});
			ctrl.tableParams.page(1);
			ctrl.tableParams.reload();
		};
	}
});

'use strict';

angular.module('adama-web').controller('CrudViewCtrl', ["$scope", "entity", function($scope, entity) {
	var ctrl = this;
	ctrl.entity = entity;
	ctrl.dismiss = function() {
		$scope.$dismiss();
	};
}]);

'use strict';

angular.module('adama-web').directive('modalBtnBackToList', function() {
	return {
		templateUrl: 'adama-web/crud/modal-btn-back-to-list.html',
		restrict: 'E'
	};
});

'use strict';

angular.module('adama-web').directive('modalBtnCancel', function() {
	return {
		templateUrl: 'adama-web/crud/modal-btn-cancel.html',
		restrict: 'E'
	};
});

'use strict';

angular.module('adama-web').directive('modalBtnConfirmDelete', function() {
	return {
		templateUrl: 'adama-web/crud/modal-btn-confirm-delete.html',
		restrict: 'E'
	};
});

'use strict';

angular.module('adama-web').directive('modalBtnConfirmEdit', function() {
	return {
		templateUrl: 'adama-web/crud/modal-btn-confirm-edit.html',
		restrict: 'E'
	};
});

'use strict';

angular.module('adama-web').directive('modalBtnConfirmExportXls', function() {
	return {
		templateUrl: 'adama-web/crud/modal-btn-confirm-export-xls.html',
		restrict: 'E'
	};
});

'use strict';

angular.module('adama-web').directive('modalBtnConfirmImportXls', function() {
	return {
		templateUrl: 'adama-web/crud/modal-btn-confirm-import-xls.html',
		restrict: 'E'
	};
});

'use strict';

angular.module('adama-web').directive('dsAuthorities', ["$parse", "jHipsterConstant", function($parse, jHipsterConstant) {
	return {
		scope: false,
		link: function(scope, element, attrs) {
			var authorities = jHipsterConstant.authorities;
			$parse(attrs.data).assign(scope, authorities);
		}
	};
}]);

'use strict';

angular.module('adama-web').directive('dsBinaryFileUrl', ["$parse", "binaryFileService", function($parse, binaryFileService) {
	return {
		scope: false,
		link: function(scope, element, attrs) {
			var updateOutput = function(binaryFileList) {
				if (attrs.output) {
					binaryFileList = angular.copy(binaryFileList);
				}
				if (!angular.isArray(binaryFileList)) {
					binaryFileList = [binaryFileList];
				}
				binaryFileService.setUrlForBinaryFiles(binaryFileList);
				if (attrs.output) {
					$parse(attrs.output).assign(scope, binaryFileList);
				}
			};
			scope.$watch(attrs.input, function() {
				var binaryFileList = $parse(attrs.input)(scope);
				if (binaryFileList) {
					updateOutput(binaryFileList);
				}
			});
		}
	};
}]);

'use strict';

angular.module('adama-web').directive('dsLanguage', ["$parse", "language", function($parse, language) {
	return {
		scope: false,
		link: function(scope, element, attrs) {
			language.getAll().then(function(languages) {
				$parse(attrs.data).assign(scope, languages);
			});
		}
	};
}]);

'use strict';

angular.module('adama-web').directive('dsPrincipalIdentity', ["$parse", "Principal", function($parse, Principal) {
	return {
		scope: false,
		link: function(scope, element, attrs) {
			Principal.identity().then(function(account) {
				$parse(attrs.data).assign(scope, account);
			});
		}
	};
}]);

'use strict';

angular.module('adama-web').directive('layoutFix', ["$rootScope", function($rootScope) {
	return {
		scope: {
			addEvent: '='
		},
		restrict: 'E',
		link: function postLink(scope) {
			if (scope.addEvent) {
				$rootScope.$on('$viewContentLoaded', function() {
					$.AdminLTE.layout.fix();
				});
			}
			$.AdminLTE.layout.fix();
		}
	};
}]);

'use strict';

angular.module('adama-web').directive('lazyControl', ["$rootScope", "$filter", function($rootScope, $filter) {
	var translateFilter = $filter('translate');
	return {
		link: function postLink(scope, element, attrs) {
			var id, additionalLabelAttributes, labelScreenOnly, labelContainer;
			var isPlaceholderForced = false;
			if (attrs.type === 'checkbox') {
				element.wrap('<div class="checkbox"><label></label></div>');
				element.after('<span></span>');
				labelContainer = element.next().eq(0);
			} else {
				id = attrs.ngModel.replace(/\./g, '_');
				additionalLabelAttributes = ' for="' + id + '"';
				labelScreenOnly = attrs.labelScreenOnly || false;
				if (labelScreenOnly) {
					additionalLabelAttributes += ' class="sr-only"';
				}
				if (attrs.placeholder) {
					isPlaceholderForced = true;
				}
				element.attr('id', id);
				element.addClass('form-control');
				element.wrap('<div class="form-group"></div>');
				element.before('<label' + additionalLabelAttributes + '></label>');
				labelContainer = element.prev().eq(0);
			}
			var initLabelAndPlaceholder = function() {
				var label = translateFilter(attrs.lazyControlLabelKey);
				labelContainer.html(label);
				if (!isPlaceholderForced) {
					element.attr('placeholder', label);
				}
			};
			initLabelAndPlaceholder();
			$rootScope.$on('$translateChangeSuccess', function() {
				initLabelAndPlaceholder();
			});
		}
	};
}]);

'use strict';

angular.module('adama-web').filter('min', function() {
	return Math.min;
});

'use strict';

angular.module('adama-web').run(["$rootScope", "$state", "Principal", "Auth", function($rootScope, $state, Principal, Auth) {
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

	$rootScope.back = function() {
		// If previous state is 'activate' or do not exist go to 'home'
		if ($state.get($rootScope.previousStateName) === null) {
			$state.go('app.main');
		} else {
			$state.go($rootScope.previousStateName, $rootScope.previousStateParams);
		}
	};
}]);

angular.module('adama-web').config(["$httpProvider", function($httpProvider) {
	$httpProvider.interceptors.push('errorHandlerInterceptor');
	$httpProvider.interceptors.push('authExpiredInterceptor');
	$httpProvider.interceptors.push('authInterceptor');
	$httpProvider.interceptors.push('notificationInterceptor');
}]);

'use strict';

angular.module('adama-web').constant('jHipsterConstant', {
	apiBase: 'http://localhost:13337/',
	appModule: 'mySuperApp',
	authorities: ['ROLE_ADMIN', 'ROLE_USER', 'ROLE_MANAGER']
});

'use strict';

angular.module('adama-web').factory('jHipsterResourceConfig', ["ParseLinks", "pdfService", function(ParseLinks, pdfService) {
	return {
		'query': {
			method: 'GET',
			isArray: true,
			transformResponse: function(data, headers, status) {
				data = angular.fromJson(data);
				if (status === 200) {
					data.$metadata = {
						links: ParseLinks.parse(headers('link')),
						totalItems: headers('X-Total-Count')
					};
				}
				return data;
			},
			interceptor: {
				response: function(response) {
					response.resource.$metadata = response.data.$metadata;
					return response.resource;
				}
			}
		},
		'get': {
			method: 'GET'
		},
		'save': {
			method: 'POST'
		},
		'update': {
			method: 'PUT'
		},
		'delete': {
			method: 'DELETE',
			params: {
				id: '@id'
			}
		},
		'massExportXls': {
			method: 'GET',
			responseType: 'arraybuffer',
			headers: {
				'Accept': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
			},
			transformResponse: pdfService.transformResponseToPdf
		},
		'massImportXls': {
			method: 'POST',
			params: {
				method: 'import-xls'
			},
			headers: {
				'Content-Type': undefined
			},
			transformRequest: function(data) {
				var formData = new window.FormData();
				var file = data.file;
				formData.append('file', file, file.name);
				return formData;
			}
		}
	};
}]);

'use strict';

angular.module('adama-web').factory('User', ["$resource", "jHipsterConstant", "jHipsterResourceConfig", function($resource, jHipsterConstant, jHipsterResourceConfig) {
	var config = angular.extend({}, jHipsterResourceConfig, {
		'delete': {
			method: 'DELETE',
			params: {
				login: '@login'
			}
		}
	});
	return $resource(jHipsterConstant.apiBase + 'api/users/:login', {}, config);
}]);

'use strict';

angular.module('adama-web').factory('binaryFileService', ["$http", "jHipsterConstant", function($http, jHipsterConstant) {
	var api = {};

	api.setUrlForBinaryFiles = function(binaryFileList) {
		var workingList = [];
		var idList = [];
		angular.forEach(binaryFileList, function(binaryFile) {
			if (binaryFile && binaryFile.id && !binaryFile.url) {
				workingList.push(binaryFile);
				idList.push(binaryFile.id);
			}
		});
		if (idList.length) {
			$http({
				method: 'GET',
				url: jHipsterConstant.apiBase + 'api/binaryFiles',
				data: {
					ids: idList
				}
			}).then(function(response) {
				angular.forEach(workingList, function(binaryFile) {
					binaryFile.url = response.data[binaryFile.id];
				});
			});
		}
	};

	return api;
}]);

'use strict';

angular.module('adama-web').provider('language', function() {
	var languages = ['en', 'fr'];
	var selectorData = [{
		code: 'en',
		labelKey: 'FLAG_EN',
		cssCLass: 'us'
	}, {
		code: 'fr',
		labelKey: 'FLAG_FR',
		cssCLass: 'fr'
	}];

	this.setLanguages = function(newLanguages) {
		languages = newLanguages;
	};

	this.setSelectorData = function(newSelectorData) {
		selectorData = newSelectorData;
	};

	this.$get = ["$q", "$http", "$translate", function($q, $http, $translate) {
		var api = {};

		api.getCurrent = function() {
			var language = $translate.storage().get('NG_TRANSLATE_LANG_KEY');
			if (angular.isUndefined(language)) {
				language = 'en';
			}
			return $q.when(language);
		};

		api.getAll = function() {
			return $q.when(languages);
		};

		api.getSelectorData = function() {
			return $q.when(selectorData);
		};

		return api;
	}];
});

'use strict';

angular.module('adama-web').factory('pdfService', ["FileSaver", function(FileSaver) {
	var api = {};

	api.transformResponseToPdf = function(data, headersGetter, status) {
		if (status === 200) {
			var dataBlob = new Blob([data], {
				type: 'application/pdf'
			});
			var contentDisposition = headersGetter('Content-Disposition');
			var filename;
			if (contentDisposition) {
				filename = contentDisposition.substring('attachment;filename = '.length);
			}
			if (!filename) {
				filename = 'file.pdf';
			}
			FileSaver.saveAs(dataBlob, filename);
		}
	};

	return api;
}]);

'use strict';

angular.module('adama-web').config(["$stateProvider", function($stateProvider) {
	$stateProvider.state('app.user', {
		url: '/users',
		templateUrl: 'adama-web/user/user-list.html',
		controller: 'CrudListCtrl',
		controllerAs: 'ctrl',
		resolve: {
			EntityGenericResource: ["User", function(User) {
				return User;
			}]
		},
		data: {
			pageTitle: 'USER_TITLE_LIST',
			authorities: ['ROLE_MANAGER', 'ROLE_ADMIN']
		}
	});

	var openModal = function($state, $uibModal, $stateParams, controllerName, templateName) {
		var resolveEntity;
		if ($stateParams) {
			resolveEntity = /* @ngInject */ ["User", function(User) {
				return User.get({
					login: $stateParams.login
				}).$promise;
			}];
		}
		$uibModal.open({
			templateUrl: 'adama-web/user/' + templateName,
			resolve: {
				entity: resolveEntity,
				EntityGenericResource: ["User", function(User) {
					return User;
				}]
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
		onEnter: ["$state", "$uibModal", "$stateParams", function($state, $uibModal, $stateParams) {
			openModal($state, $uibModal, $stateParams, 'CrudEditCtrl', 'user-edit.html');
		}],
		data: {
			pageTitle: 'USER_TITLE_EDIT',
			authorities: ['ROLE_MANAGER', 'ROLE_ADMIN']
		}
	});

	$stateProvider.state('app.user.create', {
		url: '/new',
		onEnter: ["$state", "$uibModal", function($state, $uibModal) {
			openModal($state, $uibModal, undefined, 'CrudEditCtrl', 'user-edit.html');
		}],
		data: {
			pageTitle: 'USER_TITLE_NEW',
			authorities: ['ROLE_MANAGER', 'ROLE_ADMIN']
		}
	});

	$stateProvider.state('app.user.view', {
		url: '/view/:login',
		onEnter: ["$state", "$uibModal", "$stateParams", function($state, $uibModal, $stateParams) {
			openModal($state, $uibModal, $stateParams, 'CrudViewCtrl', 'user-view.html');
		}],
		data: {
			pageTitle: 'USER_TITLE_VIEW',
			authorities: ['ROLE_MANAGER', 'ROLE_ADMIN']
		}
	});

	$stateProvider.state('app.user.delete', {
		url: '/delete/:login',
		onEnter: ["$state", "$uibModal", "$stateParams", function($state, $uibModal, $stateParams) {
			openModal($state, $uibModal, $stateParams, 'CrudDeleteCtrl', 'user-delete.html');
		}],
		data: {
			pageTitle: 'USER_TITLE_DELETE',
			authorities: ['ROLE_MANAGER', 'ROLE_ADMIN']
		}
	});

	$stateProvider.state('app.user.importXls', {
		url: '/import-xls',
		onEnter: ["$state", "$uibModal", function($state, $uibModal) {
			openModal($state, $uibModal, undefined, 'CrudImportXlsCtrl', 'user-import-xls.html');
		}],
		data: {
			pageTitle: 'USER_TITLE_IMPORT_XLS',
			authorities: ['ROLE_MANAGER', 'ROLE_ADMIN']
		}
	});

	$stateProvider.state('app.user.exportXls', {
		url: '/export-xls',
		onEnter: ["$state", "$uibModal", function($state, $uibModal) {
			openModal($state, $uibModal, undefined, 'CrudExportXlsCtrl', 'user-export-xls.html');
		}],
		data: {
			pageTitle: 'USER_TITLE_EXPORT_XLS',
			authorities: ['ROLE_MANAGER', 'ROLE_ADMIN']
		}
	});
}]);

angular.module('adama-web').config(["$translateProvider", function($translateProvider) {
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
}]);

'use strict';

angular.module('adama-web').config(["$stateProvider", function($stateProvider) {
	$stateProvider.state('app.personal.password', {
		url: '/password',
		templateUrl: 'adama-web/account/password/password.html',
		controller: 'PasswordCtrl',
		controllerAs: 'ctrl',
		data: {
			pageTitle: 'ACCOUNT_PASSWORD'
		}
	});
}]);

angular.module('adama-web').config(["$translateProvider", function($translateProvider) {
	$translateProvider.translations('fr', {
		'ACCOUNT_PASSWORD': 'Modifier mon mot de passe',
		'ACCOUNT_PASSWORD_TITLE': 'Modifier mon mot de passe',
		'ACCOUNT_PASSWORD_NEWPASSWORD': 'Mot de passe',
		'ACCOUNT_PASSWORD_NEWPASSWORD_PLACEHOLDER': 'Mot de passe ?',
		'ACCOUNT_PASSWORD_NEWPASSWORD_REQUIRED': 'Le mot de passe est obligatoire',
		'ACCOUNT_PASSWORD_NEWPASSWORD_MINLENGTH': 'Le mot de passe doit être composé d\'au moins 5 caractères.',
		'ACCOUNT_PASSWORD_NEWPASSWORD_MAXLENGTH': 'Le mot de passe doit être composé d\'au plus 50 caractères.',
		'ACCOUNT_PASSWORD_CONFIRM_NEWPASSWORD': 'Confirmation du mot de passe',
		'ACCOUNT_PASSWORD_CONFIRM_NEWPASSWORD_PLACEHOLDER': 'Confirmation du mot de passe ?',
		'ACCOUNT_PASSWORD_CONFIRM_NEWPASSWORD_REQUIRED': 'La confirmation du mot de passe est obligatoire',
		'ACCOUNT_PASSWORD_CONFIRM_NEWPASSWORD_MINLENGTH': 'La confirmation du mot de passe doit être composé d\'au moins 5 caractères.',
		'ACCOUNT_PASSWORD_CONFIRM_NEWPASSWORD_MAXLENGTH': 'La confirmation du mot de passe doit être composé d\'au plus 50 caractères.',
		'ACCOUNT_PASSWORD_CONFIRM_NEWPASSWORD_PATTERN': 'Les mots de passe ne sont pas égaux.',
		'ACCOUNT_PASSWORD_SUBMIT': 'Enregistrer',
		'ACCOUNT_PASSWORD_SAVE_SUCCESS': 'Le mot de passe a été changé avec succès.',
		'ACCOUNT_PASSWORD_SAVE_ERROR': 'Le mot de passe n\'a pu être changé.'
	});

	$translateProvider.translations('en', {
		'ACCOUNT_PASSWORD': 'Change my password',
		'ACCOUNT_PASSWORD_TITLE': 'Change my password',
		'ACCOUNT_PASSWORD_NEWPASSWORD': 'Password',
		'ACCOUNT_PASSWORD_NEWPASSWORD_PLACEHOLDER': 'Password ?',
		'ACCOUNT_PASSWORD_NEWPASSWORD_REQUIRED': 'Your password is required.',
		'ACCOUNT_PASSWORD_NEWPASSWORD_MINLENGTH': 'Your password is required to be at least 5 characters.',
		'ACCOUNT_PASSWORD_NEWPASSWORD_MAXLENGTH': 'Your password cannot be longer than 50 characters.',
		'ACCOUNT_PASSWORD_CONFIRM_NEWPASSWORD': 'Password confirmation',
		'ACCOUNT_PASSWORD_CONFIRM_NEWPASSWORD_PLACEHOLDER': 'Password confirmation ?',
		'ACCOUNT_PASSWORD_CONFIRM_NEWPASSWORD_REQUIRED': 'Your confirmation password is required.',
		'ACCOUNT_PASSWORD_CONFIRM_NEWPASSWORD_MINLENGTH': 'Your confirmation password is required to be at least 5 characters.',
		'ACCOUNT_PASSWORD_CONFIRM_NEWPASSWORD_MAXLENGTH': 'Your confirmation password cannot be longer than 50 characters.',
		'ACCOUNT_PASSWORD_CONFIRM_NEWPASSWORD_PATTERN': 'Password and confirmation do not match.',
		'ACCOUNT_PASSWORD_SUBMIT': 'Save',
		'ACCOUNT_PASSWORD_SAVE_SUCCESS': 'Password successfully changed.',
		'ACCOUNT_PASSWORD_SAVE_ERROR': 'Password could not be changed.'
	});
}]);

'use strict';

angular.module('adama-web').controller('PasswordCtrl', ["Auth", "Principal", "AlertService", function(Auth, Principal, AlertService) {
	var ctrl = this;
	Principal.identity().then(function(account) {
		ctrl.account = account;
	});
	ctrl.changePassword = function() {
		Auth.changePassword(ctrl.password).then(function() {
			AlertService.success('ACCOUNT_PASSWORD_SAVE_SUCCESS');
		}).catch(function() {
			AlertService.error('ACCOUNT_PASSWORD_SAVE_ERROR');
		});
	};
}]);

'use strict';

angular.module('adama-web').config(["$stateProvider", function($stateProvider) {
	$stateProvider.state('app.personal.settings', {
		url: '/settings',
		templateUrl: 'adama-web/account/settings/settings.html',
		controller: 'SettingsCtrl',
		controllerAs: 'ctrl',
		data: {
			pageTitle: 'ACCOUNT_SETTINGS'
		}
	});
}]);

angular.module('adama-web').config(["$translateProvider", function($translateProvider) {
	$translateProvider.translations('fr', {
		'ACCOUNT_SETTINGS': 'Mon profil',
		'ACCOUNT_SETTINGS_TITLE': 'Mon profil',
		'ACCOUNT_SETTINGS_FIRSTNAME': 'Prénom',
		'ACCOUNT_SETTINGS_FIRSTNAME_PLACEHOLDER': 'Prénom ?',
		'ACCOUNT_SETTINGS_FIRSTNAME_REQUIRED': 'Votre prénom est obligatoire.',
		'ACCOUNT_SETTINGS_FIRSTNAME_MAXLENGTH': 'Votre prénom doit être composé d\'au plus 50 caractères.',
		'ACCOUNT_SETTINGS_LASTNAME': 'Nom de famille',
		'ACCOUNT_SETTINGS_LASTNAME_PLACEHOLDER': 'Nom de famille ?',
		'ACCOUNT_SETTINGS_LASTNAME_REQUIRED': 'Votre nom de famille est obligatoire.',
		'ACCOUNT_SETTINGS_LASTNAME_MAXLENGTH': 'Votre nom de famille doit être composé d\'au plus 50 caractères.',
		'ACCOUNT_SETTINGS_EMAIL': 'Email',
		'ACCOUNT_SETTINGS_EMAIL_PLACEHOLDER': 'Email ?',
		'ACCOUNT_SETTINGS_EMAIL_REQUIRED': 'Votre email est obligatoire.',
		'ACCOUNT_SETTINGS_EMAIL_EMAIL': 'Votre email est invalide.',
		'ACCOUNT_SETTINGS_EMAIL_MAXLENGTH': 'Votre email doit être composé d\'au plus 100 caractères.',
		'ACCOUNT_SETTINGS_LANGUAGE': 'Langue',
		'ACCOUNT_SETTINGS_SUBMIT': 'Enregistrer',
		'ACCOUNT_SETTINGS_SAVE_SUCCESS': 'Enregistrement du profil avec succès.',
		'ACCOUNT_SETTINGS_SAVE_ERROR': 'Impossible d\'enregistrer le profil.'
	});

	$translateProvider.translations('en', {
		'ACCOUNT_SETTINGS': 'My profile',
		'ACCOUNT_SETTINGS_TITLE': 'My profile',
		'ACCOUNT_SETTINGS_FIRSTNAME': 'First name',
		'ACCOUNT_SETTINGS_FIRSTNAME_PLACEHOLDER': 'First name ?',
		'ACCOUNT_SETTINGS_FIRSTNAME_REQUIRED': 'Your first name is required.',
		'ACCOUNT_SETTINGS_FIRSTNAME_MAXLENGTH': 'Your first name cannot be longer than 50 characters.',
		'ACCOUNT_SETTINGS_LASTNAME': 'Last name',
		'ACCOUNT_SETTINGS_LASTNAME_PLACEHOLDER': 'Last name ?',
		'ACCOUNT_SETTINGS_LASTNAME_REQUIRED': 'Your last name is required.',
		'ACCOUNT_SETTINGS_LASTNAME_MAXLENGTH': 'Your last name cannot be longer than 50 characters.',
		'ACCOUNT_SETTINGS_EMAIL': 'Email',
		'ACCOUNT_SETTINGS_EMAIL_PLACEHOLDER': 'Email ?',
		'ACCOUNT_SETTINGS_EMAIL_REQUIRED': 'Your e-mail is required.',
		'ACCOUNT_SETTINGS_EMAIL_EMAIL': 'Your e-mail is invalid.',
		'ACCOUNT_SETTINGS_EMAIL_MAXLENGTH': 'Your e-mail cannot be longer than 100 characters.',
		'ACCOUNT_SETTINGS_LANGUAGE': 'Language',
		'ACCOUNT_SETTINGS_SUBMIT': 'Save',
		'ACCOUNT_SETTINGS_SAVE_SUCCESS': 'Profile successfully saved.',
		'ACCOUNT_SETTINGS_SAVE_ERROR': 'Profile could not be saved.'
	});
}]);

'use strict';

angular.module('adama-web').controller('SettingsCtrl', ["Principal", "Auth", "language", "AlertService", "$translate", function(Principal, Auth, language, AlertService, $translate) {
	var ctrl = this;
	var copyAccount = function(account) {
		// Store the "settings account" in a separate variable, and not in the
		// shared "account" variable.
		return {
			activated: account.activated,
			email: account.email,
			firstName: account.firstName,
			langKey: account.langKey,
			lastName: account.lastName,
			login: account.login
		};
	};
	Principal.identity().then(function(account) {
		ctrl.settingsAccount = copyAccount(account);
	});
	ctrl.save = function() {
		Auth.updateAccount(ctrl.settingsAccount).then(function() {
			return Principal.identity(true).then(function(account) {
				ctrl.settingsAccount = copyAccount(account);
				language.getCurrent().then(function(current) {
					if (ctrl.settingsAccount.langKey !== current) {
						$translate.use(ctrl.settingsAccount.langKey);
					}
					AlertService.success('ACCOUNT_SETTINGS_SAVE_SUCCESS');
				});
			});
		}).catch(function() {
			AlertService.error('ACCOUNT_SETTINGS_SAVE_ERROR');
		});
	};
}]);

'use strict';

angular.module('adama-web').component('arkFooter', {
	templateUrl: 'adama-web/ark/ark-footer/ark-footer.html'
});

'use strict';

angular.module('adama-web').config(["$translateProvider", function($translateProvider) {
	$translateProvider.translations('fr', {
		'TOGGLE_NAVIGATION': 'Navigation',
		'USERINFO_PROFILE': 'Profil',
		'USERINFO_PASSWORD': 'Mot de passe',
		'USERINFO_SIGNOUT': 'Déconnection'
	});

	$translateProvider.translations('en', {
		'TOGGLE_NAVIGATION': 'Toggle navigation',
		'USERINFO_PROFILE': 'Profile',
		'USERINFO_PASSWORD': 'Password',
		'USERINFO_SIGNOUT': 'Sign out'
	});
}]);

'use strict';

angular.module('adama-web').component('arkHeader', {
	templateUrl: 'adama-web/ark/ark-header/ark-header.html'
});

'use strict';

angular.module('adama-web').component('languageSelector', {
	templateUrl: 'adama-web/ark/language-selector/language-selector.html',
	controller: ["$rootScope", "$translate", "language", function($rootScope, $translate, language) {
		var ctrl = this;
		ctrl.changeLanguage = function(key) {
			$translate.use(key);
		};
		var updateCurrentLanguage = function() {
			ctrl.currentLanguage = $translate.use();
			if (ctrl.currentLanguage.indexOf('en') === 0) {
				ctrl.currentLanguage = 'us';
			}
		};
		$rootScope.$on('$translateChangeSuccess', function() {
			updateCurrentLanguage();
		});
		updateCurrentLanguage();
		language.getSelectorData().then(function(data) {
			ctrl.languages = data;
		});
	}]
});

'use strict';

'use strict';

angular.module('adama-web').component('mainNavigation', {
	templateUrl: 'adama-web/ark/menu/main-navigation.html',
	controller: ["$rootScope", "$filter", "menuService", function($rootScope, $filter, menuService) {
		var ctrl = this;
		var addMenuEntry, addMenuEntries;
		addMenuEntry = function(input, item) {
			var copy = angular.copy(item);
			copy.subItems = [];
			addMenuEntries(copy.subItems, item.subItems);
			copy.label = $filter('translate')(copy.label);
			input.push(copy);
		};
		addMenuEntries = function(input, menuEntries) {
			var i, l, menuEntry;
			if (menuEntries && menuEntries.length) {
				for (i = 0, l = menuEntries.length; i < l; i++) {
					menuEntry = menuEntries[i];
					addMenuEntry(input, menuEntry);
				}
			}
		};
		var updateMenuEntries = function() {
			ctrl.menuItems = [];
			var items = menuService.getItems();
			addMenuEntries(ctrl.menuItems, items);
		};
		updateMenuEntries();
		$rootScope.$on('$translateChangeSuccess', function() {
			updateMenuEntries();
		});
	}]
});

'use strict';

angular.module('adama-web').provider('menuService', function() {
	var menuItems = [];

	this.addItem = function(newItem) {
		if (newItem.position !== 'right') {
			newItem.position = 'left';
		}
		menuItems.push(newItem);
	};

	this.$get = function() {
		var api = {};
		api.getItems = function() {
			return menuItems;
		};
		return api;
	};
});

'use strict';

angular.module('adama-web').component('selectAll', {
	templateUrl: 'adama-web/ark/select-all/select-all.html',
	bindings: {
		entityList: '<'
	},
	controller: function() {
		var ctrl = this;
		ctrl.isAllChecked = false;
		ctrl.checkAll = function() {
			ctrl.isAllChecked = !ctrl.isAllChecked;
			angular.forEach(ctrl.entityList, function(entity) {
				entity.isSelected = ctrl.isAllChecked;
			});
		};
	}
});

'use strict';

angular.module('adama-web').component('userInfo', {
	templateUrl: 'adama-web/ark/user-info/user-info.html',
	controller: ["$rootScope", "$state", "Auth", function($rootScope, $state, Auth) {
		var ctrl = this;
		ctrl.signout = function() {
			Auth.logout();
			$state.go('auth.signin');
		};
		$rootScope.$on('auth.updateAccount', function(event, data) {
			ctrl.account = data.account;
		});
	}]
});

'use strict';

angular.module('adama-web').component('viewAttribute', {
	templateUrl: 'adama-web/ark/view-attribute/view-attribute.html',
	transclude: true,
	bindings: {
		labelKey: '@',
		value: '<',
		valueKey: '@value'
	},
	controller: function() {}
});

'use strict';

angular.module('adama-web')
	.directive('jhAlert', ["AlertService", function(AlertService) {
		return {
			restrict: 'E',
			template: '<div class="content-wrapper" ng-cloak ng-if="alerts && alerts.length">' +
				'<div class="box-body">' +
				'<div ng-repeat="alert in alerts" class="alert alert-dismissible" ng-class="\'alert-\' + alert.type">' +
				'<button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>' +
				'{{ alert.msg }}' +
				'</div>' +
				'</div>' +
				'</div>',
			controller: ['$scope',
				function($scope) {
					$scope.alerts = AlertService.get();
					$scope.$on('$destroy', function() {
						$scope.alerts = [];
					});
				}
			]
		};
	}])
	.directive('jhAlertError', ["AlertService", "$rootScope", "$translate", function(AlertService, $rootScope, $translate) {
		return {
			restrict: 'E',
			template: '<div class="alerts" ng-if="alerts && alerts.length">' +
				'<div ng-repeat="alert in alerts" class="alert alert-dismissible" ng-class="\'alert-\' + alert.type">' +
				'<button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>' +
				'{{ alert.msg }}' +
				'</div>' +
				'</div>',
			controller: ['$scope', 'jHipsterConstant',
				function($scope, jHipsterConstant) {

					$scope.alerts = [];

					var addErrorAlert = function(message, key, data) {
						key = key && key !== null ? key : message;
						$scope.alerts.push(
							AlertService.add({
									type: 'danger',
									msg: key,
									params: data,
									timeout: 5000,
									toast: AlertService.isToast(),
									scoped: true
								},
								$scope.alerts
							)
						);
					};

					var cleanHttpErrorListener = $rootScope.$on(jHipsterConstant.appModule + '.httpError', function(event, httpResponse) {
						var i;
						event.stopPropagation();
						switch (httpResponse.status) {
							// connection refused, server not reachable
							case 0:
								addErrorAlert('Server not reachable', 'error.server.not.reachable');
								break;

							case 400:
								var errorHeader = httpResponse.headers('X-' + jHipsterConstant.appModule + '-error');
								var entityKey = httpResponse.headers('X-' + jHipsterConstant.appModule + '-params');
								if (errorHeader) {
									var entityName = $translate.instant('global.menu.entities.' + entityKey);
									addErrorAlert(errorHeader, errorHeader, {
										entityName: entityName
									});
								} else if (httpResponse.data && httpResponse.data.fieldErrors) {
									for (i = 0; i < httpResponse.data.fieldErrors.length; i++) {
										var fieldError = httpResponse.data.fieldErrors[i];
										// convert 'something[14].other[4].id'
										// to 'something[].other[].id' so
										// translations can be written to it
										var convertedField = fieldError.field.replace(/\[\d*\]/g, '[]');
										var fieldName = $translate.instant(jHipsterConstant.appModule + '.' + fieldError.objectName + '.' + convertedField);
										addErrorAlert('Field ' + fieldName + ' cannot be empty', 'error.' + fieldError.message, {
											fieldName: fieldName
										});
									}
								} else if (httpResponse.data && httpResponse.data.message) {
									addErrorAlert(httpResponse.data.message, httpResponse.data.message, httpResponse.data);
								} else {
									addErrorAlert(httpResponse.data);
								}
								break;

							default:
								if (httpResponse.data && httpResponse.data.message) {
									addErrorAlert(httpResponse.data.message);
								} else {
									addErrorAlert(JSON.stringify(httpResponse));
								}
						}
					});

					$scope.$on('$destroy', function() {
						if (cleanHttpErrorListener !== undefined && cleanHttpErrorListener !== null) {
							cleanHttpErrorListener();
							$scope.alerts = [];
						}
					});
				}
			]
		};
	}]);

'use strict';

angular.module('adama-web')
	.provider('AlertService', function() {
		var toast = false;

		this.$get = ['$timeout', '$sce', '$translate', function($timeout, $sce, $translate) {

			var alertId = 0; // unique id for each alert. Starts from 0.
			var alerts = [];
			var timeout = 5000; // default timeout

			var isToast = function() {
				return toast;
			};

			var clear = function() {
				alerts = [];
			};

			var get = function() {
				return alerts;
			};

			var closeAlertByIndex = function(index, thisAlerts) {
				return thisAlerts.splice(index, 1);
			};

			var closeAlert = function(id, extAlerts) {
				var thisAlerts = extAlerts ? extAlerts : alerts;
				return closeAlertByIndex(thisAlerts.map(function(e) {
					return e.id;
				}).indexOf(id), thisAlerts);
			};

			var factory = function(alertOptions) {
				var alert = {
					type: alertOptions.type,
					msg: $sce.trustAsHtml(alertOptions.msg),
					id: alertOptions.alertId,
					timeout: alertOptions.timeout,
					toast: alertOptions.toast,
					position: alertOptions.position ? alertOptions.position : 'top right',
					scoped: alertOptions.scoped,
					close: function(alerts) {
						return closeAlert(this.id, alerts);
					}
				};
				if (!alert.scoped) {
					alerts.push(alert);
				}
				return alert;
			};

			var addAlert = function(alertOptions, extAlerts) {
				alertOptions.alertId = alertId++;
				alertOptions.msg = $translate.instant(alertOptions.msg, alertOptions.params);
				var alert = factory(alertOptions);
				if (alertOptions.timeout && alertOptions.timeout > 0) {
					$timeout(function() {
						closeAlert(alertOptions.alertId, extAlerts);
					}, alertOptions.timeout);
				}
				return alert;
			};

			var success = function(msg, params, position) {
				return addAlert({
					type: 'success',
					msg: msg,
					params: params,
					timeout: timeout,
					toast: toast,
					position: position
				});
			};

			var error = function(msg, params, position) {
				return addAlert({
					type: 'danger',
					msg: msg,
					params: params,
					timeout: timeout,
					toast: toast,
					position: position
				});
			};

			var warning = function(msg, params, position) {
				return addAlert({
					type: 'warning',
					msg: msg,
					params: params,
					timeout: timeout,
					toast: toast,
					position: position
				});
			};

			var info = function(msg, params, position) {
				return addAlert({
					type: 'info',
					msg: msg,
					params: params,
					timeout: timeout,
					toast: toast,
					position: position
				});
			};

			return {
				factory: factory,
				isToast: isToast,
				add: addAlert,
				closeAlert: closeAlert,
				closeAlertByIndex: closeAlertByIndex,
				clear: clear,
				get: get,
				success: success,
				error: error,
				info: info,
				warning: warning
			};
		}];

		this.showAsToast = function(isToast) {
			toast = isToast;
		};

	});

'use strict';

angular.module('adama-web')
	.factory('Auth', ["$rootScope", "$state", "$q", "$translate", "Principal", "AuthServerProvider", "Account", "Password", "PasswordResetInit", "PasswordResetFinish", function Auth($rootScope, $state, $q, $translate, Principal, AuthServerProvider, Account, Password, PasswordResetInit, PasswordResetFinish) {
		return {
			login: function(credentials, callback) {
				var cb = callback || angular.noop;
				var deferred = $q.defer();

				AuthServerProvider.login(credentials).then(function(data) {
					// retrieve the logged account information
					Principal.identity(true).then(function(account) {
						// After the login the language will be changed to
						// the language selected by the user during his registration
						$translate.use(account.langKey);
						deferred.resolve(data);
					});
					return cb();
				}).catch(function(err) {
					this.logout();
					deferred.reject(err);
					return cb(err);
				}.bind(this));

				return deferred.promise;
			},

			logout: function() {
				AuthServerProvider.logout();
				Principal.authenticate(null);
				// Reset state memory
				$rootScope.previousStateName = undefined;
				$rootScope.previousStateNameParams = undefined;
			},

			authorize: function(force) {
				return Principal.identity(force)
					.then(function() {
						var isAuthenticated = Principal.isAuthenticated();
						// an authenticated user can't access to login pages
						if (isAuthenticated && $rootScope.toState.name && $rootScope.toState.name === 'auth.signin') {
							$state.go('app.main');
						}
						if ((!$rootScope.toState.data || !$rootScope.toState.data.authorities) && !isAuthenticated) {
							// user is not signed in but desired state nneds an authenticated user
							$state.go('auth.signin');
						} else if ($rootScope.toState.data && //
							$rootScope.toState.data.authorities && //
							$rootScope.toState.data.authorities.length > 0 && //
							!Principal.hasAnyAuthority($rootScope.toState.data.authorities) //
						) {
							if (isAuthenticated) {
								// user is signed in but not authorized for desired state
								$state.go('auth.accessDenied');
							} else {
								// user is not authenticated. stow the state they wanted before you
								// send them to the signin state, so you can return them when you're done
								$rootScope.previousStateName = $rootScope.toState;
								$rootScope.previousStateNameParams = $rootScope.toStateParams;
								// now, send them to the signin state so they can log in
								$state.go('auth.signin');
							}
						}
					});
			},
			updateAccount: function(account, callback) {
				var cb = callback || angular.noop;

				return Account.save(account,
					function() {
						$rootScope.$emit('auth.updateAccount', {
							account: account
						});
						return cb(account);
					},
					function(err) {
						return cb(err);
					}.bind(this)).$promise;
			},

			changePassword: function(newPassword, callback) {
				var cb = callback || angular.noop;

				return Password.save(newPassword, function() {
					return cb();
				}, function(err) {
					return cb(err);
				}).$promise;
			},

			resetPasswordInit: function(mail, callback) {
				var cb = callback || angular.noop;

				return PasswordResetInit.save(mail, function() {
					return cb();
				}, function(err) {
					return cb(err);
				}).$promise;
			},

			resetPasswordFinish: function(keyAndPassword, callback) {
				var cb = callback || angular.noop;

				return PasswordResetFinish.save(keyAndPassword, function() {
					return cb();
				}, function(err) {
					return cb(err);
				}).$promise;
			}
		};
	}]);

'use strict';

angular.module('adama-web').directive('hasAnyAuthority', ['Principal', function(Principal) {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			var setVisible = function() {
				element.removeClass('hidden');
			};
			var setHidden = function() {
				element.addClass('hidden');
			};
			var authorities = attrs.hasAnyAuthority.replace(/\s+/g, '').split(',');
			var defineVisibility = function(reset) {
				var result;
				if (reset) {
					setVisible();
				}

				result = Principal.hasAnyAuthority(authorities);
				if (result) {
					setVisible();
				} else {
					setHidden();
				}
			};

			if (authorities.length > 0) {
				defineVisibility(true);

				scope.$watch(function() {
					return Principal.isAuthenticated();
				}, function() {
					defineVisibility(true);
				});
			}
		}
	};
}]).directive('hasAuthority', ['Principal', function(Principal) {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			var setVisible = function() {
				element.removeClass('hidden');
			};
			var setHidden = function() {
				element.addClass('hidden');
			};
			var authority = attrs.hasAuthority.replace(/\s+/g, '');
			var defineVisibility = function(reset) {

				if (reset) {
					setVisible();
				}

				Principal.hasAuthority(authority).then(function(result) {
					if (result) {
						setVisible();
					} else {
						setHidden();
					}
				});
			};

			if (authority.length > 0) {
				defineVisibility(true);

				scope.$watch(function() {
					return Principal.isAuthenticated();
				}, function() {
					defineVisibility(true);
				});
			}
		}
	};
}]);

'use strict';

angular.module('adama-web')
	.factory('Principal', ["$q", "Account", function Principal($q, Account) {
		var _identity;
		var _authenticated = false;

		return {
			isIdentityResolved: function() {
				return angular.isDefined(_identity);
			},
			isAuthenticated: function() {
				return _authenticated;
			},
			hasAuthority: function(authority) {
				if (!_authenticated) {
					return $q.when(false);
				}

				return this.identity().then(function(_id) {
					return _id.authority && _id.authority === authority;
				}, function() {
					return false;
				});
			},
			hasAnyAuthority: function(authorities) {
				if (!_authenticated || !_identity || !_identity.authority) {
					return false;
				}

				for (var i = 0; i < authorities.length; i++) {
					if (_identity.authority === authorities[i]) {
						return true;
					}
				}

				return false;
			},
			authenticate: function(identity) {
				_identity = identity;
				_authenticated = identity !== null;
			},
			identity: function(force) {
				var deferred = $q.defer();

				if (force === true) {
					_identity = undefined;
				}

				// check and see if we have retrieved the identity data from the
				// server.
				// if we have, reuse it by immediately resolving
				if (angular.isDefined(_identity)) {
					deferred.resolve(_identity);

					return deferred.promise;
				}

				// retrieve the identity data from the server, update the
				// identity object, and then resolve.
				Account.get().$promise
					.then(function(account) {
						_identity = account.data;
						_authenticated = true;
						deferred.resolve(_identity);
					})
					.catch(function() {
						_identity = null;
						_authenticated = false;
						deferred.resolve(_identity);
					});
				return deferred.promise;
			}
		};
	}]);

'use strict';

angular.module('adama-web').factory('authInterceptor', ["$rootScope", "$q", "$location", "localStorageService", function($rootScope, $q, $location, localStorageService) {
	return {
		// Add authorization token to headers
		request: function(config) {
			config.headers = config.headers || {};
			var token = localStorageService.get('token');

			if (token && token.expires && token.expires > new Date().getTime()) {
				config.headers['x-auth-token'] = token.token;
			}

			return config;
		}
	};
}]).factory('authExpiredInterceptor', ["$rootScope", "$q", "$injector", "localStorageService", function($rootScope, $q, $injector, localStorageService) {
	return {
		responseError: function(response) {
			// token has expired
			if (response.status === 401 && (response.data.error === 'invalid_token' || response.data.error === 'Unauthorized')) {
				localStorageService.remove('token');
				var Principal = $injector.get('Principal');
				if (Principal.isAuthenticated()) {
					var Auth = $injector.get('Auth');
					Auth.authorize(true);
				}
			}
			return $q.reject(response);
		}
	};
}]);

'use strict';

angular.module('adama-web').factory('errorHandlerInterceptor', ["$q", "$rootScope", "jHipsterConstant", function($q, $rootScope, jHipsterConstant) {
	return {
		'responseError': function(response) {
			if (!(response.status === 401 && response.data.path.indexOf('/api/account') === 0)) {
				$rootScope.$emit(jHipsterConstant.appModule + '.httpError', response);
			}
			return $q.reject(response);
		}
	};
}]);

'use strict';

angular.module('adama-web').factory('notificationInterceptor', ["$q", "AlertService", "jHipsterConstant", function($q, AlertService, jHipsterConstant) {
	return {
		response: function(response) {
			var alertKey = response.headers('X-' + jHipsterConstant.appModule + '-alert');
			if (angular.isString(alertKey)) {
				AlertService.success(alertKey, {
					param: response.headers('X-' + jHipsterConstant.appModule + '-params')
				});
			}
			return response;
		}
	};
}]);

/*jshint bitwise: false*/
'use strict';

angular.module('adama-web').service('Base64', function() {
	var keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
	this.encode = function(input) {
		var output = '';
		var chr1, chr2, enc1, enc2, enc3;
		var chr3 = '';
		var enc4 = '';
		var i = 0;

		while (i < input.length) {
			chr1 = input.charCodeAt(i++);
			chr2 = input.charCodeAt(i++);
			chr3 = input.charCodeAt(i++);

			enc1 = chr1 >> 2;
			enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
			enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
			enc4 = chr3 & 63;

			if (isNaN(chr2)) {
				enc3 = enc4 = 64;
			} else if (isNaN(chr3)) {
				enc4 = 64;
			}

			output = output + keyStr.charAt(enc1) + keyStr.charAt(enc2) + keyStr.charAt(enc3) + keyStr.charAt(enc4);
			chr1 = chr2 = chr3 = '';
			enc1 = enc2 = enc3 = enc4 = '';
		}

		return output;
	};

	this.decode = function(input) {
		var output = '';
		var chr1, chr2, enc1, enc2, enc3;
		var chr3 = '';
		var enc4 = '';
		var i = 0;

		// remove all characters that are not A-Z, a-z, 0-9, +, /, or =
		input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');

		while (i < input.length) {
			enc1 = keyStr.indexOf(input.charAt(i++));
			enc2 = keyStr.indexOf(input.charAt(i++));
			enc3 = keyStr.indexOf(input.charAt(i++));
			enc4 = keyStr.indexOf(input.charAt(i++));

			chr1 = (enc1 << 2) | (enc2 >> 4);
			chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
			chr3 = ((enc3 & 3) << 6) | enc4;

			output = output + String.fromCharCode(chr1);

			if (enc3 !== 64) {
				output = output + String.fromCharCode(chr2);
			}
			if (enc4 !== 64) {
				output = output + String.fromCharCode(chr3);
			}

			chr1 = chr2 = chr3 = '';
			enc1 = enc2 = enc3 = enc4 = '';
		}
	};
}).factory('StorageService', ["$window", function($window) {
	return {

		get: function(key) {
			return JSON.parse($window.localStorage.getItem(key));
		},

		save: function(key, data) {
			$window.localStorage.setItem(key, JSON.stringify(data));
		},

		remove: function(key) {
			$window.localStorage.removeItem(key);
		},

		clearAll: function() {
			$window.localStorage.clear();
		}
	};
}]);

'use strict';

angular.module('adama-web')
	.service('ParseLinks', function() {
		this.parse = function(header) {
			if (header.length === 0) {
				throw new Error('input must not be of zero length');
			}

			// Split parts by comma
			var parts = header.split(',');
			var links = {};
			// Parse each part into a named link
			angular.forEach(parts, function(p) {
				var section = p.split(';');
				if (section.length !== 2) {
					throw new Error('section could not be split on ";"');
				}
				var url = section[0].replace(/<(.*)>/, '$1').trim();
				var queryString = {};
				url.replace(
					new RegExp('([^?=&]+)(=([^&]*))?', 'g'),
					function($0, $1, $2, $3) {
						queryString[$1] = $3;
					}
				);
				var page = queryString.page;
				if (angular.isString(page)) {
					page = parseInt(page);
				}
				var name = section[1].replace(/rel='(.*)'/, '$1').trim();
				links[name] = page;
			});

			return links;
		};
	});

'use strict';

angular.module('adama-web').factory('AuthServerProvider', ["$http", "localStorageService", "Base64", "jHipsterConstant", function loginService($http, localStorageService, Base64, jHipsterConstant) {
	return {
		login: function(credentials) {
			var data = 'username=' + encodeURIComponent(credentials.username) + '&password=' + encodeURIComponent(credentials.password);
			return $http.post(jHipsterConstant.apiBase + 'api/authenticate', data, {
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
					'Accept': 'application/json'
				}
			}).success(function(response) {
				localStorageService.set('token', response);
				return response;
			});
		},
		logout: function() {
			// Stateless API : No server logout
			localStorageService.clearAll();
		},
		getToken: function() {
			return localStorageService.get('token');
		},
		hasValidToken: function() {
			var token = this.getToken();
			return token && token.expires && token.expires > new Date().getTime();
		}
	};
}]);

'use strict';

angular.module('adama-web')
	.factory('Account', ["$resource", "jHipsterConstant", function Account($resource, jHipsterConstant) {
		return $resource(jHipsterConstant.apiBase + 'api/account', {}, {
			'get': {
				method: 'GET',
				params: {},
				isArray: false,
				interceptor: {
					response: function(response) {
						// expose response
						return response;
					}
				}
			}
		});
	}]);

'use strict';

angular.module('adama-web').factory('Password', ["$resource", "jHipsterConstant", function($resource, jHipsterConstant) {
	return $resource(jHipsterConstant.apiBase + 'api/account/change_password', {}, {});
}]);

angular.module('adama-web').factory('PasswordResetInit', ["$resource", "jHipsterConstant", function($resource, jHipsterConstant) {
	return $resource(jHipsterConstant.apiBase + 'api/account/reset_password/init', {}, {});
}]);

angular.module('adama-web').factory('PasswordResetFinish', ["$resource", "jHipsterConstant", function($resource, jHipsterConstant) {
	return $resource(jHipsterConstant.apiBase + 'api/account/reset_password/finish', {}, {});
}]);

//# sourceMappingURL=adama-web.js.map
