'use strict';

angular.module('adama-web').component('selectAll', {
	templateUrl: /* @ngInject */ function(adamaConstant) {
		return adamaConstant.adamaWebToolkitTemplateUrl.selectAll;
	},
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
