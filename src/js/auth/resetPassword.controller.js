'use strict';

angular.module('adama-web').controller('ResetPasswordCtrl', function($location, $state, Principal) {
	var ctrl = this;
	ctrl.loading = false;
	ctrl.resetError = false;
	ctrl.messageForMobileUser = false;
	ctrl.resetPassword = function(newPassword) {
		ctrl.loading = true;
		Principal.resetPasswordFinish({
			key: $location.search().key,
			newPassword: newPassword
		}).then(function() {
			console.log('everything is awesome');
			var origin = $location.search().origin;
			console.log('origin', origin);
			if (origin === 'front') {
				$state.go('^.signin');
			} else if (origin === 'mobile') {
				ctrl.messageForMobileUser = true;
			}
		}, function() {
			ctrl.resetError = true;
		});
	};
});
