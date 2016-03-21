'use strict';

angular.module('adama-web').directive('crudActionDropdown', function() {
	return {
		scope: {},
		bindToController: {
			routeMapping: '='
		},
		controller: function() {},
		controllerAs: 'ctrl',
		templateUrl: 'adama-web/crud/crud-action-dropdown.html',
		restrict: 'E'
	};
});
