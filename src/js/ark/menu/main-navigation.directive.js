'use strict';

angular.module('adama-toolkit').directive('mainNavigation', function() {
	return {
		templateUrl: 'adama-toolkit/ark/menu/main-navigation.html',
		restrict: 'E',
		scope: {},
		bindToController: {},
		controller: function($rootScope, $filter, menuService) {
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
		},
		controllerAs: 'ctrl'
	};
});
