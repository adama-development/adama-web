'use strict';

angular.module('adama-web').directive('modalBtnBackToList', function(adamaConstant) {
	return {
		templateUrl: function() {
			return adamaConstant.adamaWebToolkitTemplateUrl.modalBtnBackToList;
		},
		restrict: 'E'
	};
});
