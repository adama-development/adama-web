'use strict';

angular.module('adama-web').run(function($httpBackend, mockSettings) {
	// mock authentication
	var isLogged = mockSettings.isLoggedAtStartup;

	$httpBackend.when('POST', '/login/authenticate').respond(function(method, url, data) {
		console.warn('POST /login/authenticate');
		var postedData = JSON.parse(data);
		if (postedData.password.length < 6) {
			console.error('password is too short');
			return [ 400, {
				'timestamp' : '2016-05-02T09:23:26.947+0000',
				'status' : 400,
				'error' : 'Bad Request',
				'exception' : 'org.springframework.web.bind.MethodArgumentNotValidException',
				'errors' : [ {
					'codes' : [ 'Size.loginDTO.password', 'Size.password', 'Size.java.lang.String', 'Size' ],
					'arguments' : [ {
						'codes' : [ 'loginDTO.password', 'password' ],
						'arguments' : null,
						'defaultMessage' : 'password',
						'code' : 'password'
					}, 100, 6 ],
					'defaultMessage' : 'size must be between 6 and 100',
					'objectName' : 'loginDTO',
					'field' : 'password',
					'rejectedValue' : 'a',
					'bindingFailure' : false,
					'code' : 'Size'
				} ],
				'message' : 'Validation failed for object=\'loginDTO\'. Error count: 1',
				'path' : '/login/authenticate'
			} ];
		}
		var timestamp = (new Date()).getTime() + 60 * 60 * 24;
		if (postedData.username === postedData.password) {
			return [ 200, {
				'refresh_token' : 'eyJhbGciOiJIUzUxMiJ9.' //
						+ 'eyJzdWIiOiJhbmFpayIsImF1dGgiOiJST0xFX0NMSUVOVCIsImV4cCI6MTQ5MzYzMTE2MiwiaWF0IjoxNDYyMTgxNTYyfQ' //
						+ '.sv5GSrMsNiK2Zs0bT1vy7ysyuU2v5223XZ04kf2EoxoojfOoxFbNGWIYLeisTZSuNoZblt425VKf-E4_NfckQQ',
				'access_token' : 'eyJhbGciOiJIUzUxMiJ9.'//
						  + 'eyJzdWIiOiJhbmFpayIsImF1dGgiOiJST0xFX0NMSUVOVCIsInRlbmFudCI6IjU3MjFlZjE4ZTRiMDVkMTJhYjc4OTE0OCIsImV4cCI6NDYyMTgzMzYyfQ' //
						+ '.IFxv93A-X5XiCToSUVHTCs4Og-3uZrLdWcuPaS9YxsA_QHpa1ijDvWEp51GRTmVfbWUbsZEw-T8T9RnMkw982g'
			} ];
		}
		console.error('credentials are incorrects');
		return [ 401, 'Bad credentials' ];
	});

	$httpBackend.when('POST', '/login/refresh').respond(function() {
		console.warn('POST /login/refresh');
		return [ 200, {
			'refresh_token' : 'eyJhbGciOiJIUzUxMiJ9.' //
					+ 'eyJzdWIiOiJhbmFpayIsImF1dGgiOiJST0xFX0NMSUVOVCIsImV4cCI6MTQ5MzYzMTE2MiwiaWF0IjoxNDYyMTgxNTYyfQ' //
					+ '.sv5GSrMsNiK2Zs0bT1vy7ysyuU2v5223XZ04kf2EoxoojfOoxFbNGWIYLeisTZSuNoZblt425VKf-E4_NfckQQ',
			'access_token' : 'eyJhbGciOiJIUzUxMiJ9.'//
					+ 'eyJzdWIiOiJhbmFpayIsImF1dGgiOiJST0xFX0NMSUVOVCIsInRlbmFudCI6IjU3MjFlZjE4ZTRiMDVkMTJhYjc4OTE0OCIsImV4cCI6MzQ2MjE4MzM2Mn0' //
					+ '.IFxv93A-X5XiCToSUVHTCs4Og-3uZrLdWcuPaS9YxsA_QHpa1ijDvWEp51GRTmVfbWUbsZEw-T8T9RnMkw982g'
		} ];
	});

	var connectedUser = mockSettings.connectedUser;

	$httpBackend.when('GET', '/account').respond(function() {
		console.warn('GET /account');
		if (isLogged) {
			console.warn('GET /account : logged');
			return [ 200, connectedUser ];
		}
		console.warn('GET /account : not logged');
		return [ 401, {
			error : 'Unauthorized',
			message : 'Access Denied',
			path : '/account',
			status : 401
		} ];
	});

	$httpBackend.when('POST', '/account').respond(function(method, url, data) {
		console.warn('POST /account', url, data);
		var postedData = JSON.parse(data);
		var authority = connectedUser.authority;
		connectedUser = postedData;
		connectedUser.authority = authority;
		return [ 200, connectedUser ];
	});

	$httpBackend.when('POST', '/account/change_password').respond(function(method, url, data) {
		console.warn('POST /account/change_password', url, data);
		return [ 200 ];
	});

	$httpBackend.when('POST', '/account/reset_password/init').respond(function(method, url, data) {
		console.warn('POST /account/reset_password/init', data);
		if (data === 'admin@admin') {
			return [ 200, 'e-mail was sent' ];
		}
		return [ 400, 'e-mail address not registered' ];
	});

	$httpBackend.when('POST', '/account/reset_password/finish').respond(function(method, url, data) {
		console.warn('POST /account/reset_password/finish', data);
		return [ 200, 'OK' ];
	});
});
