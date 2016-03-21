'use strict';

angular.module('adama-toolkit').directive('viewAttribute', function() {
	return {
		templateUrl: 'adama-toolkit/ark/view-attribute/view-attribute.html',
		restrict: 'E',
		transclude: true,
		scope: {},
		bindToController: {
			labelKey: '@',
			value: '=',
			valueKey: '@value'
		},
		controller: function() {},
		controllerAs: 'ctrl'
	};
});
