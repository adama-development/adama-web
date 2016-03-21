// jshint quotmark: false
// jscs:disable validateQuoteMarks
'use strict';

angular.module('adama-toolkit').run(function($httpBackend) {
	$httpBackend.whenGET(/^modules\/.*/).passThrough();
	$httpBackend.whenGET(/^adama-toolkit\/.*/).passThrough();
});
