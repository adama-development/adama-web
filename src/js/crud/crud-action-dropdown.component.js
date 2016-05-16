'use strict';

angular.module('adama-web').component('crudActionDropdown', {
	templateUrl: /* @ngInject */ function(adamaConstant) {
		return adamaConstant.adamaWebToolkitTemplateUrl.crudActionDropdown;
	},
	transclude: true,
	bindings: {
		routeMapping: '<',
		disableView: '<',
		disableEdit: '<',
		disableDelete: '<'
	}
});
