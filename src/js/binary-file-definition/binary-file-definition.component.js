'use strict';

angular.module('adama-web').component('binaryFileDefinition', {
	templateUrl: /* @ngInject */ function(adamaConstant) {
		return adamaConstant.adamaWebToolkitTemplateUrl.binaryFileDefinition;
	},
	bindings: {
		isPicture: '<',
		labelKey: '@'
	},
	require: {
		ngModel: 'ngModel'
	},
	controller: function(binaryFileService) {
		var ctrl = this;
		ctrl.isPicture = !!ctrl.isPicture;
		if (ctrl.isPicture) {
			ctrl.pattern = 'image/*';
		}
		ctrl.ongoingUpload = undefined;
		ctrl.error = false;
		ctrl.upload = function(file) {
			if (angular.isArray(file)) {
				file = file[0];
			}
			ctrl.ngModel.$setValidity('loading', false);
			ctrl.error = false;
			ctrl.ongoingUpload = binaryFileService.uploadFile(file, ctrl.isPicture);
			ctrl.ongoingUpload.then(function(resp) {
				ctrl.ngModel.$setViewValue(resp.data);
			}, function() {
				ctrl.error = true;
				ctrl.ngModel.$setViewValue(undefined);
			}).finally(function() {
				ctrl.ongoingUpload = undefined;
				ctrl.ngModel.$setValidity('loading', true);
			});
		};
		ctrl.resetFile = function() {
			ctrl.ngModel.$setViewValue(undefined);
		};
	}
});
