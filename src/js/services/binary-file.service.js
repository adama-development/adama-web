'use strict';

angular.module('adama-web').factory('binaryFileService', function($http, jHipsterConstant) {
	var api = {};

	api.setUrlForBinaryFiles = function(binaryFileList) {
		var workingList = [];
		var idList = [];
		angular.forEach(binaryFileList, function(binaryFile) {
			if (binaryFile && binaryFile.id && !binaryFile.url) {
				workingList.push(binaryFile);
				idList.push(binaryFile.id);
			}
		});
		if (idList.length) {
			$http({
				method: 'GET',
				url: jHipsterConstant.apiBase + 'api/binaryFiles',
				data: {
					ids: idList
				}
			}).then(function(response) {
				angular.forEach(workingList, function(binaryFile) {
					binaryFile.url = response.data[binaryFile.id];
				});
			});
		}
	};

	return api;
});
