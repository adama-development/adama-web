'use strict';

angular.module('adama-web').factory('adamaResourceConfig', function(ParseLinks, binaryService) {
	return {
		'query': {
			method: 'GET',
			isArray: true,
			transformResponse: function(data, headers, status) {
				data = angular.fromJson(data);
				if (status === 200) {
					data.$metadata = {
						links: ParseLinks.parse(headers('link')),
						totalItems: parseInt(headers('X-Total-Count'), 10)
					};
				}
				return data;
			},
			interceptor: {
				response: function(response) {
					response.resource.$metadata = response.data.$metadata;
					return response.resource;
				}
			}
		},
		'get': {
			method: 'GET'
		},
		'save': {
			method: 'POST'
		},
		'update': {
			method: 'PUT'
		},
		'delete': {
			method: 'DELETE',
			params: {
				id: '@id'
			}
		},
		'massExportXls': {
			method: 'GET',
			responseType: 'arraybuffer',
			params: {
				all: true
			},
			headers: {
				'Accept': 'application/vnd.ms-excel'
			},
			transformResponse: binaryService.transformResponseToExcel
		},
		'massImportXls': {
			method: 'POST',
			params: {
				method: 'import-xls'
			},
			headers: {
				'Content-Type': undefined
			},
			transformRequest: function(data) {
				var formData = new window.FormData();
				var file = data.file;
				formData.append('file', file, file.name);
				return formData;
			}
		}
	};
});
