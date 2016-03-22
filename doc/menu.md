# Menu

The main navigation is managed through a specific service : app/modules/modulesmenuService.js.
The service is not used directly, we use it at configuration phase with its provider :

	angular.module('cottonMeApp').config(function(menuServiceProvider) {
		menuServiceProvider.addItem({
			label : 'MENU_ADMIN',
			rank: 10,
			subItems : [{
				label : 'MENU_ADMIN_USERS',
				url : '#/users',
				rank: 1
			}]
		});
	});


The "rank" attribute is used to order menu item (as permissions are discover asynchronously, it helps to keep order).
The "label" attribute is the i18n key used with angular-translate.

At level 1, you can have 3 types of items :

- divider :

	{
		label : 'MENU_ADMIN',
		divider : true
	}

- menu entry :

	{
		label : 'MENU_FOOBAR',
		url : '#/users',
		rank: 1
	}

- parent category :

	{
		label : 'MENU_WOOT',
		rank: 1,
		subItems : [{
			label : 'MENU_ADMIN_USERS',
			url : '#/users',
			rank: 1
		}]
	}

At level 2, you can have 1 type of items :

- menu entry :

	{
		label : 'MENU_ADMIN_USERS',
		url : '#/users',
		rank: 1
	}
