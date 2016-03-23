'use strict';

angular.module('adama-web').directive('crudSearchField', function() {
	return {
		templateUrl: 'adama-web/crud/crud-search-field.html',
		restrict: 'E',
		scope: {},
		bindToController: {
			tableParams: '='
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
		},
		controllerAs: '$ctrl'
	};
});
