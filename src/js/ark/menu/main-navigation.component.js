'use strict';

angular.module('adama-web').component('mainNavigation', {
	templateUrl: /* @ngInject */ function(adamaConstant) {
		return adamaConstant.adamaWebToolkitTemplateUrl.mainNavigation;
	},
	controller: function($rootScope, $filter, menuService) {
		var ctrl = this;
		var translate = $filter('translate');
		var translateLabels = function(itemList) {
			if (!!itemList) {
				angular.forEach(itemList, function(item) {
					item.label = translate(item.labelKey);
					translateLabels(item.subItems);
				});
			}
		};
		ctrl.menuItems = menuService.getItems();
		var updateMenuEntries = function() {
			translateLabels(ctrl.menuItems);
		};
		updateMenuEntries();
		$rootScope.$on('$translateChangeSuccess', updateMenuEntries);
	}
});
