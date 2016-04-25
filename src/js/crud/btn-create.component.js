'use strict';

angular.module('adama-web').component('btnCreate', {
	templateUrl: 'adama-web/crud/btn-create.html',
	transclude: true,
	bindings: {
		disableCreate: '<',
		disableMassImport: '<',
		disableMassExport: '<',
		disableAdditionnalAction: '<'
	}
});
