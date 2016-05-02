'use strict';

angular.module('adama-web').directive('hasAuthority', function(Principal) {
	return {
		restrict : 'A',
		link : function(scope, element, attrs) {
			var setVisible = function() {
				element.removeClass('hidden');
			};
			var setHidden = function() {
				element.addClass('hidden');
			};
			var authority = attrs.hasAuthority.replace(/\s+/g, '');
			var defineVisibility = function(reset) {

				if (reset) {
					setVisible();
				}

				Principal.hasAuthority(authority).then(function(result) {
					if (result) {
						setVisible();
					} else {
						setHidden();
					}
				});
			};

			if (authority.length > 0) {
				defineVisibility(true);

				scope.$watch(function() {
					return Principal.isAuthenticated();
				}, function() {
					defineVisibility(true);
				});
			}
		}
	};
});
