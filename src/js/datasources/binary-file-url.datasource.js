'use strict';

angular.module('adama-web').directive('dsBinaryFileUrl', function($parse, binaryFileService) {
	return {
		scope: false,
		link: function(scope, element, attrs) {
			var updateOutput = function(binaryFileList) {
				binaryFileList = angular.copy(binaryFileList);
				if (!angular.isArray(binaryFileList)) {
					binaryFileList = [binaryFileList];
				}
				binaryFileService.setUrlForBinaryFiles(binaryFileList);
				$parse(attrs.output).assign(scope, binaryFileList);
			};
			var binaryFileList = $parse(attrs.input)(scope);
			if (binaryFileList) {
				updateOutput(binaryFileList);
			}
		}
	};
});
