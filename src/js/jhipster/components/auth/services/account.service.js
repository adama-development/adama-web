'use strict';

angular.module('adama-web')
	.factory('Account', function Account($resource, adamaConstant) {
		return $resource(adamaConstant.apiBase + 'api/account', {}, {
			'get': {
				method: 'GET',
				params: {},
				isArray: false,
				interceptor: {
					response: function(response) {
						// expose response
						return response;
					}
				}
			}
		});
	});
