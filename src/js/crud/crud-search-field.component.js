'use strict';

angular.module('adama-web').component('crudSearchField', {
	templateUrl: /* @ngInject */ function(adamaConstant) {
		return adamaConstant.adamaWebToolkitTemplateUrl.crudSearchField;
	},
	bindings: {
		tableParams: '<'
	},
	controller: function() {
		var ctrl = this;
		ctrl.search = function() {
			ctrl.tableParams.filter({
				$: ctrl.searchValue
			});
			ctrl.tableParams.page(1);
			ctrl.tableParams.reload();
		};
	}
});
