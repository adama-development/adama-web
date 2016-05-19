'use strict';

angular.module('adama-web').component('binaryFileDefinition', {
	templateUrl: /* @ngInject */ function(adamaConstant) {
		return adamaConstant.adamaWebToolkitTemplateUrl.binaryFileDefinition;
	},
	bindings: {
		afterUploadCallback: '&?',
		filePattern: '@',
		labelKey: '@'
	},
	require: {
		ngModel: 'ngModel'
	},
	controller: function(binaryFileService) {
		var ctrl = this;
		ctrl.isPicture = ctrl.filePattern === 'image/*';
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
				var newFile = resp.data;
				if (ctrl.afterUploadCallback) {
					return ctrl.afterUploadCallback({
						newFile: newFile
					});
				}
				return newFile;
			}).then(function(newFile) {
				ctrl.ngModel.$setViewValue(newFile);
			}, function() {
				ctrl.error = true;
				ctrl.ngModel.$setViewValue(undefined);
			}).finally(function() {
				ctrl.ngModel.$setValidity('loading', true);
				ctrl.ongoingUpload = undefined;
			});
		};
		ctrl.resetFile = function() {
			ctrl.ngModel.$setViewValue(undefined);
		};
	}
});
