'use strict';

angular.module('adama-toolkit').config(function($translateProvider) {
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
});
