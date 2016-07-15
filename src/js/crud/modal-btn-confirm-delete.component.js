'use strict';

angular.module('adama-web').component('modalBtnConfirmDelete', {
	templateUrl: /* @ngInject */ function(adamaConstant) {
		return adamaConstant.adamaWebToolkitTemplateUrl.modalBtnConfirmDelete;
	},
	bindings: {
		entity: '<',
		afterActionCallback: '&'
	},
	controller: function(AlertService) {
		var ctrl = this;
		ctrl.confirmDelete = function() {
			ctrl.entity.$delete().then(function() {
				AlertService.success('CRUD_DELETE_SUCCESS');
				ctrl.afterActionCallback();
			}).catch(function() {
				AlertService.error('CRUD_DELETE_ERROR');
			});
		};
	}
});
