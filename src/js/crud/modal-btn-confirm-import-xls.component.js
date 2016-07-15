'use strict';

angular.module('adama-web').component('modalBtnConfirmImportXls', {
	templateUrl: /* @ngInject */ function(adamaConstant) {
		return adamaConstant.adamaWebToolkitTemplateUrl.modalBtnConfirmImportXls;
	},
	bindings: {
		entityGenericResource: '<',
		afterActionCallback: '&',
		file: '<'
	},
	controller: function(AlertService) {
		var ctrl = this;
		ctrl.loading = false;
		ctrl.confirmImportXls = function() {
			var file = ctrl.file;
			ctrl.loading = true;
			ctrl.entityGenericResource.massImportXls({
				file: file
			}).$promise.then(function() {
				AlertService.success('CRUD_IMPORT_XLS_SUCCESS');
				ctrl.afterActionCallback();
			}, function() {
				AlertService.error('CRUD_IMPORT_XLS_ERROR');
			}).finally(function() {
				ctrl.loading = false;
			});
		};
	}
});
