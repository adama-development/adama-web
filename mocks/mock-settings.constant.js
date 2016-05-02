'use strict';

angular.module('adama-web').constant('mockSettings', {
	isLoggedAtStartup : false,
	defaultLatencyInMs : 700,
	connectedUser : {
		"id": "5721f0b1e4b05d12ab78914a",
		'login' : 'admin',
		'firstName' : 'Vincent',
		'lastName' : 'Delacourt',
		'email' : 'vincent.delacourt@adama-development.com',
		'langKey' : 'en',
		'authority' : 'ROLE_ADMIN'
	},
	users : [ {
		'id' : 'user-0',
		'login' : 'user',
		'firstName' : 'User',
		'lastName' : 'Doe',
		'email' : 'user-no-reply@adama-development.com',
		'langKey' : 'cn',
		'authority' : 'ROLE_USER'
	}, {
		'id' : '56c573e9224f93a3ad32fb6c',
		'login' : 'admin',
		'firstName' : 'Admin',
		'lastName' : 'Doe',
		'email' : 'admin-no-reply@adama-development.com',
		'langKey' : 'en',
		'authority' : 'ROLE_ADMIN'
	} ]
});
