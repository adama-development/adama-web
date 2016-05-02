'use strict';

angular.module('adama-web').factory('binaryFileService', function($http, $q, adamaConstant) {
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
				method: 'GET',
				url: adamaConstant.apiBase + 'api/binaryFiles',
				data: {
					ids: idList
				}
			}).then(function(response) {
				angular.forEach(workingList, function(binaryFile) {
					binaryFile.url = response.data[binaryFile.id];
				});
			});
		}
		return $q.when();
	};

	return api;
});
