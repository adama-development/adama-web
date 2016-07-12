'use strict';

angular.module('adama-web').factory('binaryService', function(FileSaver) {
	var api = {};

	var saveFile = function(data, headersGetter, status, contentType, defaultFileName) {
		if (status === 200) {
			var dataBlob = new Blob([data], {
				type: contentType
			});
			var contentDisposition = headersGetter('Content-Disposition');
			var filename;
			if (contentDisposition) {
				filename = contentDisposition.substring('attachment;filename = '.length);
			}
			if (!filename) {
				filename = defaultFileName;
			}
			FileSaver.saveAs(dataBlob, filename);
		}
		return data;
	};

	api.transformResponseToPdf = function(data, headersGetter, status) {
		return saveFile(data, headersGetter, status, 'application/pdf', 'file.pdf');
	};

	api.transformResponseToExcel = function(data, headersGetter, status) {
		return saveFile(data, headersGetter, status, 'application/vnd.ms-excel', 'file.xls');
	};

	return api;
});
