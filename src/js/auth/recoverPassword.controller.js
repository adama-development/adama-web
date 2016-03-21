'use strict';

angular.module('adama-toolkit').controller('RecoverPasswordCtrl', function(Auth) {
	var ctrl = this;
	ctrl.recover = function(userEmail) {
		ctrl.recoverSuccess = false;
		ctrl.recoverError = false;
		ctrl.errorEmailNotExists = false;
		ctrl.loading = true;
		Auth.resetPasswordInit(userEmail).then(function() {
			ctrl.recoverSuccess = true;
		}).catch(function(response) {
			if (response.status === 400 && response.data === 'e-mail address not registered') {
				ctrl.errorEmailNotExists = true;
			} else {
				ctrl.recoverError = true;
			}
		}).finally(function() {
			ctrl.loading = false;
		});
	};
});
