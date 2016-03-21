'use strict';

angular.module('adama-toolkit').directive('crudActionDropdown', function() {
	return {
		scope: {},
		bindToController: {
			routeMapping: '='
		},
		controller: function() {},
		controllerAs: 'ctrl',
		templateUrl: 'adama-toolkit/crud/crud-action-dropdown.html',
		restrict: 'E'
	};
});
