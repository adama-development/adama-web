/*jshint -W069 */
/*jscs:disable requireDotNotation*/
'use strict';

angular.module('adama-web').factory('adamaTokenService', function($rootScope, $http, $q, $state, $log, jwtHelper, localStorageService, adamaConstant) {
	var log = $log.getInstance('adama-web.service');

	var api = {};

	var getPayload = function(key) {
		return api.getToken().then(function(token) {
			if (token) {
				var tokenPayload = jwtHelper.decodeToken(token);
				if (key) {
					return tokenPayload[key];
				}
				return tokenPayload;
			}
			return undefined;
		});
	};

	api.getUsername = function() {
		return getPayload('sub');
	};

	api.setToken = function(token) {
		localStorageService.set('token', token);
	};

	api.setRefreshToken = function(token) {
		localStorageService.set('refresh_token', token);
	};

	api.getToken = function() {
		var token = localStorageService.get('token');
		if (token && jwtHelper.isTokenExpired(token)) {
			log.debug('adamaTokenService.getToken token is expired');
			return api.refreshAndGetToken();
		}
		return $q.when(token);
	};

	api.refreshAndGetToken = function() {
		var token = localStorageService.get('token');
		if (!token) {
			console.error('no token, redirect to signin');
			$state.go('auth.signin');
			return $q.reject('refreshAndGetToken : no token');
		}
		var refreshToken = localStorageService.get('refresh_token');
		return $http({
			method: 'POST',
			url: adamaConstant.apiBase + 'login/refresh',
			headers: {
				'Authorization': 'Bearer ' + token
			},
			data: {
				'refresh_token': refreshToken
			}
		}).then(function(response) {
			var data = response.data;
			var newToken = data['access_token'];
			api.setToken(newToken);
			return newToken;
		}, function(rejection) {
			console.error('error while refreshing user token, redirect to signin', rejection);
			$state.go('auth.signin');
			api.setToken(undefined);
			return $q.reject(rejection);
		});
	};

	return api;
});
