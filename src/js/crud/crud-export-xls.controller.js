'use strict';

angular.module('adama-web').controller('CrudExportXlsCtrl', function(EntityGenericResource, title) {
	var ctrl = this;
	ctrl.entityGenericResource = EntityGenericResource;
	ctrl.title = title;
});
