'use strict';

angular.module('adama-web').directive('modalBtnConfirmExportXls', function(adamaConstant) {
	return {
		templateUrl: function() {
			return adamaConstant.adamaWebToolkitTemplateUrl.modalBtnConfirmExportXls;
		},
		restrict: 'E'
	};
});
