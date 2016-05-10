'use strict';

angular.module('adama-web').component('adamaAlert', {
	templateUrl: /* @ngInject */ function(adamaConstant) {
		return adamaConstant.adamaWebToolkitTemplateUrl.adamaAlert;
	},
	controller: function(AlertService) {
		var ctrl = this;
		ctrl.alerts = AlertService.get();
	}
});
