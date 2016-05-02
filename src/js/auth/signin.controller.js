'use strict';

angular.module('adama-web').controller('SigninCtrl', function($rootScope, $state, Auth) {
	var ctrl = this;
	ctrl.signin = function(userName, userPassword) {
		ctrl.authenticationError = false;
		Auth.login({
			username: userName,
			password: userPassword
		}).then(function() {
			if ($rootScope.previousStateName === 'auth.signin' || $state.get($rootScope.previousStateName) === null) {
				$state.go('app.main');
			} else {
				$state.go($rootScope.previousStateName, $rootScope.previousStateParams);
			}
		}).catch(function() {
			ctrl.authenticationError = true;
		});
	};
});
