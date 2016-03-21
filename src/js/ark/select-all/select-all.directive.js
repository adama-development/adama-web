'use strict';

angular.module('adama-toolkit').directive('selectAll', function() {
	return {
		templateUrl: 'adama-toolkit/ark/select-all/select-all.html',
		restrict: 'E',
		scope: {},
		bindToController: {
			entityList: '='
		},
		controller: function() {
			var ctrl = this;
			ctrl.isAllChecked = false;
			ctrl.checkAll = function() {
				ctrl.isAllChecked = !ctrl.isAllChecked;
				angular.forEach(ctrl.entityList, function(entity) {
					entity.isSelected = ctrl.isAllChecked;
				});
			};
		},
		controllerAs: 'ctrl'
	};
});
