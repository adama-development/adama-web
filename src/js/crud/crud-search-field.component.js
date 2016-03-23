'use strict';

angular.module('adama-web').component('crudSearchField', {
	templateUrl: 'adama-web/crud/crud-search-field.html',
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
