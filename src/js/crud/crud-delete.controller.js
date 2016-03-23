'use strict';

angular.module('adama-web').controller('CrudDeleteCtrl', function($scope, entity, AlertService) {
	var ctrl = this;
	ctrl.dismiss = function() {
		$scope.$dismiss();
	};
	ctrl.confirmDelete = function() {
		entity.$delete().then(function() {
			AlertService.success('CRUD_DELETE_SUCCESS');
			$scope.$close();
		}).catch(function() {
			AlertService.error('CRUD_DELETE_ERROR');
		});
	};
});
