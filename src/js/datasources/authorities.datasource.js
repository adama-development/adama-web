'use strict';

angular.module('adama-web').directive('dsAuthorities', function($parse, jHipsterConstant) {
	return {
		scope: false,
		link: function(scope, element, attrs) {
			var authorities = jHipsterConstant.authorities;
			$parse(attrs.data).assign(scope, authorities);
		}
	};
});
