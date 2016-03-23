'use strict';

angular.module('adama-web').component('languageSelector', {
	templateUrl: 'adama-web/ark/language-selector/language-selector.html',
	controller: function($rootScope, $translate, language) {
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
	}
});
