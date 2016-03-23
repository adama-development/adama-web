'use strict';

angular.module('adama-web').component('viewAttribute', {
	templateUrl: 'adama-web/ark/view-attribute/view-attribute.html',
	transclude: true,
	bindings: {
		labelKey: '@',
		value: '<',
		valueKey: '@value'
	},
	controller: function() {}
});
