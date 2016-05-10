'use strict';

angular.module('adama-web').component('crudCustomFilter', {
	templateUrl: /* @ngInject */ function(adamaConstant) {
		return adamaConstant.adamaWebToolkitTemplateUrl.crudCustomFilter;
	},
	bindings: {
		tableParams: '<',
		searchValue: '<',
		labelKey: '@'
	},
	controller: function() {
		var ctrl = this;
		ctrl.displayFiltered = function() {
			ctrl.tableParams.filter({
				business: ctrl.searchValue
			});
			ctrl.tableParams.page(1);
			ctrl.tableParams.reload();
		};
	}
});
