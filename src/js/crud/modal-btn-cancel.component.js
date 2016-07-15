'use strict';

angular.module('adama-web').component('modalBtnCancel', {
	templateUrl: /* @ngInject */ function(adamaConstant) {
		return adamaConstant.adamaWebToolkitTemplateUrl.modalBtnCancel;
	},
	bindings: {
		afterActionCallback: '&'
	}
});
