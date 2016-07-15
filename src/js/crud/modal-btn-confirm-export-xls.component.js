'use strict';

angular.module('adama-web').component('modalBtnConfirmExportXls', {
	templateUrl: /* @ngInject */ function(adamaConstant) {
		return adamaConstant.adamaWebToolkitTemplateUrl.modalBtnConfirmExportXls;
	},
	bindings: {
		entityGenericResource: '<',
		afterActionCallback: '&'
	},
	controller: function(AlertService) {
		var ctrl = this;
		ctrl.loading = false;
		ctrl.confirmExportXls = function() {
			ctrl.loading = true;
			ctrl.entityGenericResource.massExportXls().$promise.then(function() {
				AlertService.success('CRUD_EXPORT_XLS_SUCCESS');
				ctrl.afterActionCallback();
			}).catch(function() {
				AlertService.error('CRUD_EXPORT_XLS_ERROR');
			}).finally(function() {
				ctrl.loading = false;
			});
		};
	}
});
