/*jshint -W069 */
/*jscs:disable requireDotNotation*/
'use strict';

angular.module('adama-web').factory('authInterceptor', function($injector, $log, adamaConstant) {
	var getAdamaTokenService = (function() {
		var service;
		return function() {
			return service || (service = $injector.get('adamaTokenService'));
		};
	}());

	return {
		// Add authorization token to headers
		request: function(config) {
			var log = $log.getInstance('adama-web.interceptors');
			config.headers = config.headers || {};
			if (!config.headers['Authorization'] && config.url.indexOf(adamaConstant.apiBase) === 0) {
				log.debug('authInterceptor need authorization, getting token');
				return getAdamaTokenService().getToken().then(function(token) {
					log.debug('add token to http config');
					if (token) {
						config.headers['Authorization'] = 'Bearer ' + token;
					}
					return config;
				});
			}
			return config;
		}
	};
});
