'use strict';

angular.module('adama-web').component('crudCustomFilter', {
	templateUrl: 'adama-web/crud/crud-custom-filter.html',
	bindings: {
		tableParams: '<',
		searchFieldName: '@',
		searchFieldValue: '<',
		labelKey: '@'
	},
	controller: function() {
		var ctrl = this;
		ctrl.displayFiltered = function() {
			var businessFilter = {};
			businessFilter[ctrl.searchFieldName] = ctrl.searchFieldValue;
			ctrl.tableParams.filter({
				business: businessFilter
			});
			ctrl.tableParams.page(1);
			ctrl.tableParams.reload();
		};
	}
});
