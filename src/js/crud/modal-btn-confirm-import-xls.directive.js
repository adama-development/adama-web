'use strict';

angular.module('adama-web').directive('modalBtnConfirmImportXls', function(adamaConstant) {
	return {
		templateUrl: function() {
			return adamaConstant.adamaWebToolkitTemplateUrl.modalBtnConfirmImportXls;
		},
		restrict: 'E'
	};
});
