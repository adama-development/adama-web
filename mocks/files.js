'use strict';

angular.module('adama-web').run(function($httpBackend, $http, adamaConstant, mockSettings) {
	var entities = mockSettings.users;

	$httpBackend.when('PUT', '/files').respond(function(method, url, data) {
		data = JSON.parse(data);
		console.warn('PUT /files', method, url, data);
		var result = {
			urlList : {}
		};
		angular.forEach(data.idList, function(id) {
			result.urlList[id] = id + '?comingFormMock=true';
		})
		return [ 200, result ];
	});
});
