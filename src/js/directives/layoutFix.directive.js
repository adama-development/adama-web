'use strict';

angular.module('adama-toolkit').directive('layoutFix', function($rootScope) {
	return {
		scope: {
			addEvent: '='
		},
		restrict: 'E',
		link: function postLink(scope) {
			if (scope.addEvent) {
				$rootScope.$on('$viewContentLoaded', function() {
					$.AdminLTE.layout.fix();
				});
			}
			$.AdminLTE.layout.fix();
		}
	};
});
