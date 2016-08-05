'use strict';

angular.module('adama-web').directive('mainNavbarAutomaticClosing', function() {
	return {
		scope: {},
		restrict: 'E',
		link: function postLink() {
			$('.sidebar-menu').on('click', 'a', function() {
				$('body').removeClass('sidebar-open');
			});
		}
	};
});
