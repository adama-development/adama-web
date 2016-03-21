'use strict';

angular.module('adama-toolkit').directive('lazyControl', function($rootScope, $filter) {
	var translateFilter = $filter('translate');
	return {
		link: function postLink(scope, element, attrs) {
			var id, additionalLabelAttributes, labelScreenOnly, labelContainer;
			if (attrs.type === 'checkbox') {
				element.wrap('<div class="checkbox"><label></label></div>');
				element.after('<span></span>');
				labelContainer = element.next().eq(0);
			} else {
				id = attrs.ngModel.replace(/\./g, '_');
				additionalLabelAttributes = ' for="' + id + '"';
				labelScreenOnly = attrs.labelScreenOnly || false;
				if (labelScreenOnly) {
					additionalLabelAttributes += ' class="sr-only"';
				}
				element.attr('id', id);
				element.addClass('form-control');
				element.wrap('<div class="form-group"></div>');
				element.before('<label' + additionalLabelAttributes + '></label>');
				labelContainer = element.prev().eq(0);
			}
			labelContainer.html(translateFilter(attrs.lazyControlLabelKey));
			$rootScope.$on('$translateChangeSuccess', function() {
				labelContainer.html(translateFilter(attrs.lazyControlLabelKey));
			});
		}
	};
});
