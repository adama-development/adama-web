'use strict';

angular.module('adama-web').config(function($stateProvider) {
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

	$stateProvider.state('auth.resetPassword', {
		url: '/resetPassword',
		templateUrl: 'adama-web/auth/resetPassword.html',
		controller: 'ResetPasswordCtrl',
		controllerAs: 'ctrl',
		data: {
			pageTitle: 'RESET_PASSWORD',
			authorities: []
		}
	});
});

angular.module('adama-web').config(function($translateProvider) {
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
		'ACCESS_DENIED_INTRO': 'Vous n\'avez pas suffisamment de droits d\'accéder à cette page.',
		'ACCESS_DENIED_BACK_TO_LOGIN': 'Retour à l\'identificaition',
		'RESET_PASSWORD': 'Initialisation du mot de passe',
		'RESET_PASSWORD_INTRO': 'Saisissez et confirmez votre mot de passe',
		'RESET_PASSWORD_SUBMIT': 'Modifier mon mot de passe',
		'RESET_PASSWORD_PASSWORD': 'Mot de passe',
		'RESET_PASSWORD_PASSWORD_REQUIRED': 'Le mot de passe est obligatoire',
		'RESET_PASSWORD_PASSWORD_MINLENGTH': 'Minimum 6 caractères',
		'RESET_PASSWORD_PASSWORD_MAXLENGTH': 'Maximum 100 caractères',
		'RESET_PASSWORD_PASSWORD_CONFIRM': 'Confirmation du mot de passe',
		'RESET_PASSWORD_PASSWORD_CONFIRM_REQUIRED': 'La confirmation est obligatoire',
		'RESET_PASSWORD_PASSWORD_CONFIRM_MATCH': 'La confirmation ne correspond pas',
		'RESET_PASSWORD_ERROR': 'Une erreur est intervenur, contactez un administrateur',
		'RESET_PASSWORD_MESSAGE_FOR_MOBILE_USER': 'Vous pouvez vous authentifier dans l\'application mobile'
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
		'ACCESS_DENIED_INTRO': 'You do not have enough privileges to access this page.',
		'ACCESS_DENIED_BACK_TO_LOGIN': 'Back to signin',
		'RESET_PASSWORD': 'New password',
		'RESET_PASSWORD_INTRO': 'Set and confirm new password',
		'RESET_PASSWORD_SUBMIT': 'Change my password',
		'RESET_PASSWORD_PASSWORD': 'Password',
		'RESET_PASSWORD_PASSWORD_REQUIRED': 'Password is required',
		'RESET_PASSWORD_PASSWORD_MINLENGTH': '6 chars minimum',
		'RESET_PASSWORD_PASSWORD_MAXLENGTH': '100 chars maximum',
		'RESET_PASSWORD_PASSWORD_CONFIRM': 'Password confirmation',
		'RESET_PASSWORD_PASSWORD_CONFIRM_REQUIRED': 'Confirmation is required',
		'RESET_PASSWORD_PASSWORD_CONFIRM_MATCH': 'Confirmation does not match',
		'RESET_PASSWORD_ERROR': 'There was an error, please contact adminstrator',
		'RESET_PASSWORD_MESSAGE_FOR_MOBILE_USER': 'You can now signin into the mobile application'
	});
});
