'use strict';

angular.module('adama-web').controller('CrudEditCtrl', function($scope, entity, EntityGenericResource, AlertService) {
	var ctrl = this;
	ctrl.isEdition = !!entity;
	ctrl.entity = entity;
	ctrl.dismiss = function() {
		$scope.$dismiss();
	};
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
			$scope.$close(newEntity);
		});
	};
});
