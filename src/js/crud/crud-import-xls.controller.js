'use strict';

angular.module('adama-web').controller('CrudImportXlsCtrl', function($scope, AlertService, EntityGenericResource) {
	var ctrl = this;

	ctrl.dismiss = function() {
		$scope.$dismiss();
	};

	ctrl.loading = false;
	ctrl.confirmImportXls = function() {
		var file = ctrl.file;
		ctrl.loading = true;
		EntityGenericResource.massImportXls({
			file: file
		}).$promise.then(function() {
			AlertService.success('CRUD_IMPORT_XLS_SUCCESS');
			$scope.$close();
		}, function() {
			AlertService.error('CRUD_IMPORT_XLS_ERROR');
		}).finally(function() {
			ctrl.loading = false;
		});
	};
});
