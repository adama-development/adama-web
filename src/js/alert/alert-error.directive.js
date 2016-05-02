'use strict';

angular.module('adama-web').directive('jhAlertError', function(AlertService, $rootScope, $translate) {
	return {
		restrict : 'E',
		templateUrl : 'adama-web/alert/alert-error.html',
		controller : function($scope, adamaConstant) {

			$scope.alerts = [];

			var addErrorAlert = function(message, key, data) {
				key = key && key !== null ? key : message;
				$scope.alerts.push(AlertService.add({
					type : 'danger',
					msg : key,
					params : data,
					timeout : 5000,
					toast : AlertService.isToast(),
					scoped : true
				}, $scope.alerts));
			};

			var cleanHttpErrorListener = $rootScope.$on(adamaConstant.appModule + '.httpError', function(event, httpResponse) {
				var i;
				event.stopPropagation();
				switch (httpResponse.status) {
				// connection refused, server not reachable
				case 0:
					addErrorAlert('Server not reachable', 'error.server.not.reachable');
					break;

				case 400:
					var errorHeader = httpResponse.headers('X-' + adamaConstant.appModule + '-error');
					var entityKey = httpResponse.headers('X-' + adamaConstant.appModule + '-params');
					if (errorHeader) {
						var entityName = $translate.instant('global.menu.entities.' + entityKey);
						addErrorAlert(errorHeader, errorHeader, {
							entityName : entityName
						});
					} else if (httpResponse.data && httpResponse.data.fieldErrors) {
						for (i = 0; i < httpResponse.data.fieldErrors.length; i++) {
							var fieldError = httpResponse.data.fieldErrors[i];
							// convert 'something[14].other[4].id'
							// to 'something[].other[].id' so
							// translations can be written to it
							var convertedField = fieldError.field.replace(/\[\d*\]/g, '[]');
							var fieldName = $translate.instant(adamaConstant.appModule + '.' + fieldError.objectName + '.' + convertedField);
							addErrorAlert('Field ' + fieldName + ' cannot be empty', 'error.' + fieldError.message, {
								fieldName : fieldName
							});
						}
					} else if (httpResponse.data && httpResponse.data.message) {
						addErrorAlert(httpResponse.data.message, httpResponse.data.message, httpResponse.data);
					} else {
						addErrorAlert(httpResponse.data);
					}
					break;

				default:
					if (httpResponse.data && httpResponse.data.message) {
						addErrorAlert(httpResponse.data.message);
					} else {
						addErrorAlert(JSON.stringify(httpResponse));
					}
				}
			});

			$scope.$on('$destroy', function() {
				if (cleanHttpErrorListener !== undefined && cleanHttpErrorListener !== null) {
					cleanHttpErrorListener();
					$scope.alerts = [];
				}
			});
		} 
	};
});
