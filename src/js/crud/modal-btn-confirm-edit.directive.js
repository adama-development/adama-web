'use strict';

angular.module('adama-web').directive('modalBtnConfirmEdit', function(adamaConstant) {
	return {
		templateUrl: function() {
			return adamaConstant.adamaWebToolkitTemplateUrl.modalBtnConfirmEdit;
		},
		restrict: 'E'
	};
});
