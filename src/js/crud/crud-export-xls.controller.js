'use strict';

angular.module('adama-web').controller('CrudExportXlsCtrl', function($scope, AlertService, EntityGenericResource) {
	var ctrl = this;
	ctrl.dismiss = function() {
		$scope.$dismiss();
	};
	ctrl.loading = false;
	ctrl.confirmExportXls = function() {
		ctrl.loading = true;
		EntityGenericResource.massExportXls().$promise.then(function(newEntity) {
			AlertService.success('CRUD_EXPORT_XLS_SUCCESS');
			$scope.$close(newEntity);
		}).catch(function() {
			AlertService.error('CRUD_EXPORT_XLS_ERROR');
		}).finally(function() {
			ctrl.loading = false;
		});
	};
});
