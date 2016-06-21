'use strict';

angular.module('adama-web').controller('CrudListCtrl', function(EntityGenericResource, NgTableParams) {
	// TODO filter search results
	var ctrl = this;

	// search data
	ctrl.tableParams = new NgTableParams({}, {
		total: 0,
		getData: function(params) {
			var sort = params.sorting();
			var sortValues = [];
			if (!angular.equals({}, sort)) {
				for (var key in sort) {
					if (sort.hasOwnProperty(key)) {
						sortValues.push(key + ',' + sort[key]);
					}
				}
			}
			var requestParams = angular.extend({}, {
				page: params.page() - 1,
				size: params.count(),
				sort: sortValues,
				search: params.filter().$
			}, params.filter().business);
			return EntityGenericResource.query(requestParams).$promise.then(function(entities) {
				params.total(entities.$metadata.totalItems);
				return entities;
			});
		}
	});
});
