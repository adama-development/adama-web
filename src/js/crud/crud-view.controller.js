'use strict';

angular.module('adama-toolkit').controller('CrudViewCtrl', function($scope, entity) {
	var ctrl = this;
	ctrl.entity = entity;
	ctrl.dismiss = function() {
		$scope.$dismiss();
	};
});
