'use strict';

angular.module('adama-web').directive('dsAuthorities', function($parse) {
	return {
		scope: false,
		link: function(scope, element, attrs) {
			var authorities = ['ROLE_ADMIN', 'ROLE_USER', 'ROLE_MANAGER', 'ROLE_WORKSHOP', 'ROLE_CUTTER', 'ROLE_SHIPPING', 'ROLE_OFFICE', 'ROLE_PRESTASHOP'];
			$parse(attrs.data).assign(scope, authorities);
		}
	};
});
