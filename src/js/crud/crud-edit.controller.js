'use strict';

angular.module('adama-web').controller('CrudEditCtrl', function($state, entity, EntityGenericResource) {
	var ctrl = this;
	ctrl.isEdition = !!entity && !!entity.id;
	ctrl.entity = entity;
	ctrl.entityGenericResource = EntityGenericResource;
	ctrl.afterActionCallback = function(newEntity) {
		if (ctrl.isEdition) {
			ctrl.entity = newEntity;
		} else {
			$state.go('^.edit', {
				entityId: newEntity.id
			});
		}
	};
});
