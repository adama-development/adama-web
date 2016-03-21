'use strict';

angular.module('adama-web').controller('CrudDeleteCtrl', function($scope, entity, AlertService) {
	var ctrl = this;
	ctrl.entity = entity;
	ctrl.dismiss = function() {
		$scope.$dismiss();
	};
	ctrl.confirmDelete = function() {
		entity.$delete().then(function(newEntity) {
			AlertService.success('CRUD_DELETE_SUCCESS');
			$scope.$close(newEntity);
		}).catch(function() {
			AlertService.error('CRUD_DELETE_ERROR');
		});
	};
});
