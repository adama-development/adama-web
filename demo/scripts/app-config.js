'use strict';

angular.module('adamaDemoApp').config(function($translateProvider) {
	$translateProvider.translations('fr', {
		'APP_NAME': 'Adama Demo',
		'APP_NAME_SHORT': 'AD',
		'MENU_DIVIDER_BADGES': 'Exemples badge',
		'MENU_BADGES_1': 'Exemple badge A',
		'MENU_BADGES_2': 'Exemple badge B',
		'MENU_BADGES_3': 'Exemple badge C',
		'MENU_BADGES_4': 'Badge example D'
	});

	$translateProvider.translations('en', {
		'APP_NAME': 'Adama Demo',
		'APP_NAME_SHORT': 'AD',
		'MENU_DIVIDER_BADGES': 'Badge examples',
		'MENU_BADGES_1': 'Badge example A',
		'MENU_BADGES_2': 'Badge example B',
		'MENU_BADGES_3': 'Badge example C',
		'MENU_BADGES_4': 'Badge example D'
	});
});

angular.module('adamaDemoApp').config(function(adamaConstant) {
	adamaConstant.appModule = 'adamaDemoApp';
});


angular.module('adamaDemoApp').config(function(menuServiceProvider) {
	menuServiceProvider.addItem({
		labelKey: 'MENU_DIVIDER_BADGES',
		divider: true,
		rank: 100
	});

	menuServiceProvider.addItem({
		labelKey: 'MENU_BADGES_1',
		url: '#/todo',
		iconClass: 'glyphicon glyphicon-equalizer',
		rank: 101,
		badge: {
			value: 5,
			event: 'badge1-event',
			color: 'label-danger'
		}
	});

	menuServiceProvider.addItem({
		labelKey: 'MENU_BADGES_2',
		url: '#/todo',
		iconClass: 'glyphicon glyphicon-equalizer',
		rank: 102,
		badge: {
			value: 5,
			event: 'badge2-event',
			color: 'label-warning'
		}
	});

	menuServiceProvider.addItem({
		labelKey: 'MENU_BADGES_3',
		url: '#/todo',
		iconClass: 'glyphicon glyphicon-equalizer',
		rank: 103,
		badge: {
			value: 5,
			event: 'badge3-event',
			color: 'label-info'
		}
	});

	menuServiceProvider.addItem({
		labelKey: 'MENU_BADGES_4',
		url: '#/todo',
		iconClass: 'glyphicon glyphicon-equalizer',
		rank: 104,
		badge: {
			value: 5,
			event: 'badge4-event',
			color: 'label-success'
		}
	});
});
