'use strict';

angular.module('adama-web').directive('modalBtnCancel', function(adamaConstant) {
	return {
		templateUrl: function() {
			return adamaConstant.adamaWebToolkitTemplateUrl.modalBtnCancel;
		},
		restrict: 'E'
	};
});
