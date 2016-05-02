'use strict';

angular.module('adama-web').component('adamaAlert', {
	templateUrl : 'adama-web/alert/adama-alert.html',
	controller : function(AlertService) {
		var ctrl = this;
		ctrl.alerts = AlertService.get();
	}
});
