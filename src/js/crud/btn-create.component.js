'use strict';

angular.module('adama-web').component('btnCreate', {
	templateUrl: /* @ngInject */ function(adamaConstant) {
		return adamaConstant.adamaWebToolkitTemplateUrl.btnCreate;
	},
	transclude: true,
	bindings: {
		disableCreate: '<',
		disableMassImport: '<',
		disableMassExport: '<',
		disableAdditionnalAction: '<'
	}
});
