'use strict';

angular.module('adama-web').directive('layoutFix', function($rootScope, $timeout) {
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
			$timeout(function() {
				$.AdminLTE.layout.fix();
			}, 0);
		}
	};
});
