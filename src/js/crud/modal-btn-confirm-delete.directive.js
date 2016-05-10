'use strict';

angular.module('adama-web').directive('modalBtnConfirmDelete', function(adamaConstant) {
	return {
		templateUrl: function() {
			return adamaConstant.adamaWebToolkitTemplateUrl.modalBtnConfirmDelete;
		},
		restrict: 'E'
	};
});
