'use strict';

angular.module('adama-web').factory('binaryFileService', function($http, $q, Upload, adamaConstant) {
	var api = {};

	api.initUrlForBinaryFiles = function(binaryFileList) {
		var workingList = [];
		var idList = [];
		angular.forEach(binaryFileList, function(binaryFile) {
			if (binaryFile && binaryFile.id && !binaryFile.url) {
				workingList.push(binaryFile);
				idList.push(binaryFile.id);
			}
		});
		if (idList.length) {
			return $http({
				method: 'PUT',
				url: adamaConstant.apiBase + 'files',
				data: idList
			}).then(function(response) {
				angular.forEach(workingList, function(binaryFile) {
					binaryFile.url = response.data.urlList[binaryFile.id];
				});
			});
		}
		return $q.when();
	};

	api.uploadFile = function(file, isPicture) {
		return Upload.upload({
			url: adamaConstant.apiBase + 'files?isPicture=' + isPicture,
			data: {
				file: file
			},
			disableProgress: true
		});
	};

	return api;
});
