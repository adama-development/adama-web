	'use strict';

angular.module('adama-toolkit').config(function($provide) {
	$provide.decorator('$httpBackend', function($delegate) {
		var proxy = function(method, url, data, callback, headers) {
			var interceptor = function() {
				var _this = this, _arguments = arguments;
				setTimeout(function() {
					callback.apply(_this, _arguments);
				}, 700);
			};
			return $delegate.call(this, method, url, data, interceptor, headers);
		};
		for ( var key in $delegate) {
			proxy[key] = $delegate[key];
		}
		return proxy;
	});
})