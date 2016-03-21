'use strict';

angular.module('adama-web').controller('PasswordCtrl', function(Auth, Principal, AlertService) {
	var ctrl = this;
	Principal.identity().then(function(account) {
		ctrl.account = account;
	});
	ctrl.changePassword = function() {
		Auth.changePassword(ctrl.password).then(function() {
			AlertService.success('ACCOUNT_PASSWORD_SAVE_SUCCESS');
		}).catch(function() {
			AlertService.error('ACCOUNT_PASSWORD_SAVE_ERROR');
		});
	};
});
