'use strict';

angular.module('adama-web').controller('SigninCtrl', function($rootScope, $state, Auth) {
	var ctrl = this;
	ctrl.signin = function(userName, userPassword) {
		ctrl.authenticationError = false;
		Auth.login({
			username: userName,
			password: userPassword
		}).then(function() {
			if ($rootScope.previousStateName === 'auth.signin') {
				$state.go('app.main');
			} else {
				$rootScope.back();
			}
		}).catch(function() {
			ctrl.authenticationError = true;
		});
	};
});
