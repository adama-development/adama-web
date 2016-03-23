'use strict';

angular.module('adama-web').component('selectAll', {
	templateUrl: 'adama-web/ark/select-all/select-all.html',
	bindings: {
		entityList: '<'
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
	}
});
