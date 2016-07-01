'use strict';

angular.module('adama-web').directive('btnConfirmEdit', function(adamaConstant) {
	return {
		templateUrl: function() {
			return adamaConstant.adamaWebToolkitTemplateUrl.btnConfirmEdit;
		},
		restrict: 'E'
	};
});
