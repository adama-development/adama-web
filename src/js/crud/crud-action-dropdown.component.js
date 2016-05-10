'use strict';

angular.module('adama-web').component('crudActionDropdown', {
	templateUrl: /* @ngInject */ function(adamaConstant) {
		return adamaConstant.adamaWebToolkitTemplateUrl.crudActionDropdown;
	},
	bindings: {
		routeMapping: '<',
		disableView: '<',
		disableEdit: '<',
		disableDelete: '<'
	}
});
