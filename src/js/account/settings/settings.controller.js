'use strict';

angular.module('adama-web').controller('SettingsCtrl', function(Principal, language, AlertService, $translate) {
	var ctrl = this;
	var copyAccount = function(account) {
		// Store the "settings account" in a separate variable, and not in the
		// shared "account" variable.
		return {
			activated: account.activated,
			email: account.email,
			firstName: account.firstName,
			langKey: account.langKey,
			lastName: account.lastName,
			login: account.login
		};
	};
	Principal.identity().then(function(account) {
		ctrl.settingsAccount = copyAccount(account);
	});
	ctrl.save = function() {
		Principal.updateAccount(ctrl.settingsAccount).then(function() {
			return Principal.identity(true).then(function(account) {
				ctrl.settingsAccount = copyAccount(account);
				language.getCurrent().then(function(current) {
					if (ctrl.settingsAccount.langKey !== current) {
						$translate.use(ctrl.settingsAccount.langKey);
					}
					AlertService.success('ACCOUNT_SETTINGS_SAVE_SUCCESS');
				});
			});
		}).catch(function() {
			AlertService.error('ACCOUNT_SETTINGS_SAVE_ERROR');
		});
	};
});
