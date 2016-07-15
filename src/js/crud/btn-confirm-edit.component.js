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
		ctrl.save = function() {
			var isEdition = !!ctrl.entity && !!ctrl.entity.id;
			var resourceAction;
			if (isEdition) {
				resourceAction = ctrl.entityGenericResource.update;
			} else {
				resourceAction = ctrl.entityGenericResource.save;
			}
			resourceAction(ctrl.entity).$promise.then(function(newEntity) {
				if (isEdition) {
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
