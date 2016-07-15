'use strict';

angular.module('adama-web').controller('CrudDeleteCtrl', function(entity, title) {
	var ctrl = this;
	ctrl.entity = entity;
	ctrl.title = title;
});
