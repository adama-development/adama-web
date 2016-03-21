'use strict';

angular.module('adama-web').directive('viewAttribute', function() {
	return {
		templateUrl: 'adama-web/ark/view-attribute/view-attribute.html',
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
