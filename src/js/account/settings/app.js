'use strict';

angular.module('adama-web').config(function($stateProvider, adamaConstant) {
	$stateProvider.state('app.personal.settings', {
		url: '/settings',
		templateUrl: function() {
			return adamaConstant.adamaWebToolkitTemplateUrl.settings;
		},
		controller: 'SettingsCtrl',
		controllerAs: 'ctrl',
		data: {
			pageTitle: 'ACCOUNT_SETTINGS'
		}
	});
});

angular.module('adama-web').config(function($translateProvider) {
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
});
