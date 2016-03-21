// jshint quotmark: false
// jscs:disable validateQuoteMarks
'use strict';

angular.module('adama-toolkit').run(function($httpBackend) {
	// mock authentication
	var isLogged = false;

	$httpBackend.when('POST', '/api/authenticate', function(postdata) {
		var data = {};
		postdata.split('&').forEach(function(queryParam) {
			var couple = queryParam.split('=');
			data[couple[0]] = couple[1];
		});
		isLogged = data.username === data.password;
		return true;
	}).respond(function() {
		var timestamp = (new Date()).getTime() + 60 * 60 * 24;
		if (isLogged) {
			return [200, {
				token: 'admin:' + timestamp + ':d69678ead222693b38c85e81695449b9',
				expires: timestamp
			}];
		}
		return [401, {
			"timestamp": "2016-02-23T07:34:44.178+0000",
			"status": 401,
			"error": "Unauthorized",
			"exception": "org.springframework.security.authentication.BadCredentialsException",
			"message": "Access Denied",
			"path": "/api/authenticate"
		}];
	});

	$httpBackend.when('GET', '/api/account').respond(function() {
		if (isLogged) {
			console.log('GET /api/account : logged');
			return [200, {
				"login": "admin",
				"password": null,
				"firstName": "Vincent",
				"lastName": "Delacourt",
				"email": "vincent.delacourt@adama-development.com",
				"activated": true,
				"langKey": "en",
				"authorities": ["ROLE_ADMIN"]
			}];
		}
		console.log('GET /api/account : not logged');
		return [401, {
			error: "Unauthorized",
			message: "Access Denied",
			path: "/api/account",
			status: 401
		}];
	});
});
