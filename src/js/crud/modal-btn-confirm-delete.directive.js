'use strict';

angular.module('adama-web').directive('modalBtnConfirmDelete', function() {
	return {
		templateUrl: 'adama-web/crud/modal-btn-confirm-delete.html',
		restrict: 'E'
	};
});
