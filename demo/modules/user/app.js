'use strict';

angular.module('adamaDemoApp').config(function(menuServiceProvider) {
	menuServiceProvider.addItem({
		label : 'USER_MENU',
		url : '#/app/users',
		iconClass : 'fa fa-users',
		rank : 10
	});
});
