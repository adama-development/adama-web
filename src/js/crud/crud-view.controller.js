'use strict';

angular.module('adama-web').controller('CrudViewCtrl', function($scope, entity) {
	var ctrl = this;
	ctrl.entity = entity;
	ctrl.dismiss = function() {
		$scope.$dismiss();
	};
});
