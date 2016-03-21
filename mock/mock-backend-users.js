// jshint quotmark: false
// jscs:disable validateQuoteMarks
'use strict';

angular.module('adama-toolkit').run(function($httpBackend) {
	var entities = [{
		"login": "user",
		"password": null,
		"firstName": "User",
		"lastName": "Doe",
		"email": "user-no-reply@adama-development.com",
		"activated": true,
		"langKey": "cn",
		"authorities": ["ROLE_USER"],
		"id": "user-0",
		"createdDate": new Date("2016-02-18T07:34:00.997Z"),
		"lastModifiedBy": "admin",
		"lastModifiedDate": new Date("2016-02-21T16:09:07.867Z"),
		"joinDate": new Date("2016-02-21T16:09:07.867Z")
	}, {
		"login": "admin",
		"password": null,
		"firstName": "Admin",
		"lastName": "Doe",
		"email": "admin-no-reply@adama-development.com"",
		"activated": true,
		"langKey": "en",
		"authorities": ["ROLE_ADMIN"],
		"id": "56c573e9224f93a3ad32fb6c",
		"createdDate": new Date("2016-02-18T07:34:01.004Z"),
		"lastModifiedBy": "admin",
		"lastModifiedDate": new Date("2016-02-21T14:18:11.862Z"),
		"joinDate": new Date("2016-02-21T16:09:07.867Z")
	}];
	$httpBackend.when('GET', /^\/api\/users\?.*/).respond(function() {
		return [200, entities, {
			'Link': '</api/users?page=0&size=20>; rel="last",</api/users?page=0&size=20>; rel="first"',
			'X-Total-Count': 35
		}];
	});
	var getById = function(id) {
		var entity;
		angular.forEach(entities, function(e) {
			if (id === e.login) {
				entity = e;
			}
		});
		return entity;
	};
	$httpBackend.when('GET', /^\/api\/users\/.*/).respond(function(method, url) {
		var id = url.substring('/api/users/'.length);
		var entity = getById(id);
		if (entity) {
			return [200, entity];
		}
		return [404];
	});
});
