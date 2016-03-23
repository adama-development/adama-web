'use strict';

angular.module('adama-web').controller('CrudImportXlsCtrl', function($scope, AlertService, EntityGenericResource) {
	var ctrl = this;
	ctrl.dismiss = function() {
		$scope.$dismiss();
	};
	ctrl.loading = false;
	ctrl.confirmImportXls = function() {
		ctrl.loading = true;
		EntityGenericResource.massImportXls().$promise.then(function(newEntity) {
			AlertService.success('CRUD_IMPORT_XLS_SUCCESS');
			$scope.$close(newEntity);
		}).catch(function() {
			AlertService.error('CRUD_IMPORT_XLS_ERROR');
		}).finally(function(){
			ctrl.loading = false;
		});
	};
});
