'use strict';

angular.module('adama-web').directive('dsAuthorities', function($parse, adamaConstant) {
	return {
		scope: false,
		link: function(scope, element, attrs) {
			var authorities = adamaConstant.authorities;
			$parse(attrs.data).assign(scope, authorities);
		}
	};
});
