# Notifications

Notifications are managed through a specific factory 'notificationService' that you may inject into your controller or service.

The notification service use postman as its implementation : https://github.com/jirikavi/AngularJS-Toaster

The available notifications are :

- success
- info
- warning
- error

To use it, inject the service and give the metho you want a title and a text to display :

	angular.module('cottonMeApp').controller('SigninCtrl', function(notificationService) {
		notificationService.info('My title', 'My text');
	});
