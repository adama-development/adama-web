'use strict';

angular.module('adama-web').run(function($httpBackend, $http, adamaConstant, mockSettings) {
	var entities = mockSettings.users;

	$httpBackend.when('PUT', '/files').respond(function(method, url, data) {
		data = JSON.parse(data);
		console.warn('PUT /files', method, url, data);
		var result = {
			urlList : {}
		};
		angular.forEach(data, function(id) {
			result.urlList[id] = id + '?comingFormMock=true';
		});
		return [ 200, result ];
	});

	$httpBackend.when('POST', /\/files\?isPicture=.*/).respond(function(method, url, data, headers, params) {
		console.warn('POST /files?isPicture=xxx', method, url, params);
		var result = {
			id : '' + (new Date()).getTime(),
			isPicture: params.isPicture,
			fileName: 'File #' + (new Date()).getTime()
		};
		return [ 200, result ];
	});
});
