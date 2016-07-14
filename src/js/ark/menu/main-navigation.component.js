'use strict';

angular.module('adama-web').component('mainNavigation', {
	templateUrl: /* @ngInject */ function(adamaConstant) {
		return adamaConstant.adamaWebToolkitTemplateUrl.mainNavigation;
	},
	controller: function($rootScope, $filter, $location, $scope, menuService) {
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
		var updateActiveStatus = function(){
			if (ctrl.menuItems) {
				angular.forEach(ctrl.menuItems, function(item){
					item.active = !!item.url && $location.path().indexOf(item.url.substring(1)) === 0;
				});
			}
		};
		$scope.$watch(function(){
			return $location.path();
		}, updateActiveStatus);
		$scope.$watch(function(){
			return ctrl.menuItems;
		}, updateActiveStatus);
	}
});
