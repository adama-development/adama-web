'use strict';

angular.module('adama-web').controller('CrudEditFullpageCtrl', function(entity, EntityGenericResource, AlertService) {
	var ctrl = this;
	ctrl.isEdition = !!entity;
	ctrl.entity = entity;
	ctrl.save = function() {
		var resourceAction;
		if (ctrl.isEdition) {
			resourceAction = EntityGenericResource.update;
		} else {
			resourceAction = EntityGenericResource.save;
		}
		resourceAction(ctrl.entity).$promise.then(function(newEntity) {
			if (ctrl.isEdition) {
				AlertService.success('CRUD_EDIT_SUCCESS');
			} else {
				AlertService.success('CRUD_NEW_SUCCESS');
			}
			ctrl.entity = newEntity;
		});
	};
});
