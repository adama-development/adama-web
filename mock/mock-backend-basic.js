// jshint quotmark: false
// jscs:disable validateQuoteMarks
'use strict';

angular.module('adama-web').run(function($httpBackend) {
	$httpBackend.whenGET(/^modules\/.*/).passThrough();
	$httpBackend.whenGET(/^adama-web\/.*/).passThrough();
});
