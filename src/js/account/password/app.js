'use strict';

angular.module('adama-web').config(function($stateProvider, adamaConstant) {
	$stateProvider.state('app.personal.password', {
		url: '/password',
		templateUrl: function() {
			return adamaConstant.adamaWebToolkitTemplateUrl.password;
		},
		controller: 'PasswordCtrl',
		controllerAs: 'ctrl',
		data: {
			pageTitle: 'ACCOUNT_PASSWORD'
		}
	});
});

angular.module('adama-web').config(function($translateProvider) {
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
});
