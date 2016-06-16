'use strict';

angular.module('adama-web').provider('menuService', function() {
	var menuItems = [];

	this.addItem = function(newItem) {
		if (newItem.position !== 'right') {
			newItem.position = 'left';
		}
		menuItems.push(newItem);
	};

	this.$get = function($rootScope) {
		var api = {};
		angular.forEach(menuItems, function(menuItem) {
			if (menuItem.badge && menuItem.badge.event) {
				$rootScope.$on(menuItem.badge.event, function(event, param) {
					menuItem.badge.value = param.value;
				});
			}
		});
		api.getItems = function() {
			return menuItems;
		};
		return api;
	};
});
