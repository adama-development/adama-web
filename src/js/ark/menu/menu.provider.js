'use strict';

angular.module('adama-web').provider('menuService', function() {
	var menuItems = [];

	this.addItem = function(newItem) {
		if (newItem.position !== 'right') {
			newItem.position = 'left';
		}
		menuItems.push(newItem);
	};

	this.$get = function() {
		var api = {};
		api.getItems = function() {
			return menuItems;
		};
		return api;
	};
});
