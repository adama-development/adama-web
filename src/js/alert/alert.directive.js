'use strict';

angular.module('adama-web').directive('jhAlert', function(AlertService) {
	return {
		restrict : 'E',
		templateUrl : 'adama-web/alert/alert.html',
		controller : function($scope) {
			$scope.alerts = AlertService.get();
			$scope.$on('$destroy', function() {
				$scope.alerts = [];
			});
		}
	};
});
