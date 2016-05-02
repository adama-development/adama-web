'use strict';

angular.module('adama-web').run(function($httpBackend, $http, adamaConstant, mockSettings) {
	var entities = mockSettings.users;

	$httpBackend.when('GET', '/binaryFiles').respond(function(method, url, data) {
		data = JSON.parse(data);
		console.warn('GET /binaryFiles', method, url, data);
		var result = {};
		angular.forEach(data.ids, function(id) {
			result[id] = id + '?comingFormMock=true';
		})
		return [ 200, result ];
	});
});
