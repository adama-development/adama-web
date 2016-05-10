'use strict';

angular.module('adama-web').component('viewAttribute', {
	templateUrl: /* @ngInject */ function(adamaConstant) {
		return adamaConstant.adamaWebToolkitTemplateUrl.viewAttribute;
	},
	transclude: true,
	bindings: {
		labelKey: '@',
		value: '<',
		valueKey: '@value'
	},
	controller: function() {}
});
