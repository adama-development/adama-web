'use strict';

angular.module('adama-web').component('btnConfirmEdit', {
	templateUrl: /* @ngInject */ function(adamaConstant) {
		return adamaConstant.adamaWebToolkitTemplateUrl.btnConfirmEdit;
	},
	bindings: {
		entity: '<',
		entityGenericResource: '<',
		afterActionCallback: '&',
		form: '<'
	},
	controller: function(AlertService) {
		var ctrl = this;
		ctrl.isEdition = !!ctrl.entity && !!ctrl.entity.id;
		ctrl.save = function() {
			var resourceAction;
			if (ctrl.isEdition) {
				resourceAction = ctrl.entityGenericResource.update;
			} else {
				resourceAction = ctrl.entityGenericResource.save;
			}
			resourceAction(ctrl.entity).$promise.then(function(newEntity) {
				if (ctrl.isEdition) {
					AlertService.success('CRUD_EDIT_SUCCESS');
				} else {
					AlertService.success('CRUD_NEW_SUCCESS');
				}
				ctrl.afterActionCallback({
					newEntity: newEntity
				});
			});
		};

	}
});
