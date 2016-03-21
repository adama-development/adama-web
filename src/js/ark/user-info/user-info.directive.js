'use strict';

angular.module('adama-web').directive('userInfo', function() {
	return {
		templateUrl: 'adama-web/ark/user-info/user-info.html',
		restrict: 'E',
		scope: {},
		bindToController: {},
		controller: function($rootScope, $state, Auth) {
			var ctrl = this;
			ctrl.signout = function() {
				Auth.logout();
				$state.go('auth.signin');
			};
			$rootScope.$on('auth.updateAccount', function(event, data) {
				ctrl.account = data.account;
			});
		},
		controllerAs: 'ctrl'
	};
});
