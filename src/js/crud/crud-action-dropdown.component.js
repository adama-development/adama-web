'use strict';

angular.module('adama-web').component('crudActionDropdown', {
	bindings: {
		routeMapping: '<',
		disableView: '<',
		disableEdit: '<',
		disableDelete: '<'
	},
	templateUrl: 'adama-web/crud/crud-action-dropdown.html'
});
