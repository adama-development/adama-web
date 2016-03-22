# Mocked data backend

To ease frontend development, the backend is mocked.

By plugin ngMockE2E, we can change $httpBackend's behavior :

	angular.module('adama-web').run(function($httpBackend) {
		var entities = [];

		$httpBackend.when('GET', /^\/api\/users\?.*/).respond(function(method, url) {
			console.warn('GET /api/users', url);
			return [200, entities, {
				'Link': '</api/users?page=0&size=20>; rel="last",</api/users?page=0&size=20>; rel="first"',
				'X-Total-Count': 35
			}];
		});

		$httpBackend.when('GET', /^\/api\/users\/.*/).respond(function(method, url) {
			console.warn('GET /api/users/xx', url);
			var id = url.substring('/api/users/'.length);
			var entity = getById(id);
			if (entity) {
				return [200, entity];
			}
			return [404];
		});
	});
