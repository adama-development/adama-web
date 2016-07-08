'use strict';

angular.module('adama-web').factory('binaryService', function(FileSaver) {
	var api = {};

	api.transformResponseToPdf = function(data, headersGetter, status) {
		if (status === 200) {
			var dataBlob = new Blob([data], {
				type: 'application/pdf'
			});
			var contentDisposition = headersGetter('Content-Disposition');
			var filename;
			if (contentDisposition) {
				filename = contentDisposition.substring('attachment;filename = '.length);
			}
			if (!filename) {
				filename = 'file.pdf';
			}
			FileSaver.saveAs(dataBlob, filename);
		}
	};

	return api;
});
