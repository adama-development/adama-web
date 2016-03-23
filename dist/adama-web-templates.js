angular.module("adama-web").run(["$templateCache", function($templateCache) {$templateCache.put("adama-web/auth/accessDenied.html","<div class=\"login-box\">\n	<div class=\"login-logo\">\n		<b translate>APP_NAME</b>\n	</div>\n	<div class=\"login-box-body\">\n		<p class=\"login-box-msg\" translate>ACCESS_DENIED_INTRO</p>\n	</div>\n</div>\n");
$templateCache.put("adama-web/auth/recoverPassword.html","<div class=\"login-box\">\n	<div class=\"login-logo\">\n		<b translate>APP_NAME</b>\n	</div>\n	<div class=\"login-box-body\">\n		<p class=\"login-box-msg\" translate>RECOVER_INTRO</p>\n		<form\n			method=\"post\"\n			name=\"recoverForm\"\n			ng-submit=\"ctrl.recover(userEmail)\"\n		>\n			<div class=\"form-group has-feedback\">\n				<label for=\"email\" class=\"sr-only\" translate>RECOVER_MAIL</label>\n				<input type=\"email\" id=\"email\" class=\"form-control\" name=\"userEmail\" ng-model=\"userEmail\" placeholder=\"{{ \'RECOVER_MAIL\' | translate }}\" required />\n				<span class=\"glyphicon glyphicon-envelope form-control-feedback\"></span>\n				<div ng-messages=\"recoverForm.userEmail.$error\" ng-if=\"recoverForm.userEmail.$touched\" class=\"text-danger\">\n					<div ng-message=\"required\" translate>RECOVER_MAIL_REQUIRED</div>\n					<div ng-message=\"email\" translate>RECOVER_MAIL_EMAIL</div>\n				</div>\n			</div>\n			<div\n				ng-if=\"ctrl.recoverError\"\n				class=\"text-danger\"\n				translate\n			>RECOVER_ERROR</div>\n			<div\n				ng-if=\"ctrl.errorEmailNotExists\"\n				class=\"text-danger\"\n				translate\n			>RECOVER_ERROR_EMAIL_NOT_EXIST</div>\n			<div\n				ng-if=\"ctrl.recoverSuccess\"\n				class=\"text-danger\"\n				translate\n			>RECOVER_SUCCESS</div>\n			<div>\n				<button\n					type=\"submit\"\n					class=\"btn btn-primary btn-block btn-flat\"\n					ng-disabled=\"recoverForm.$invalid || ctrl.loading\"\n					translate\n				>RECOVER_SUBMIT</button>\n			</div>\n			<!-- \n				TODO feedback management : Thank you! You will receive an email with instructions to reset your password\n			-->\n		</form>\n		<div>\n			<a ui-sref=\"^.signin\">\n				<i class=\"glyphicon glyphicon-arrow-left\"></i>\n				<span translate>RECOVER_BACK_TO_LOGIN</span>\n			</a>\n		</div>\n	</div>\n</div>\n");
$templateCache.put("adama-web/auth/signin.html","<div class=\"login-box\">\n	<div class=\"login-logo\">\n		<b translate>APP_NAME</b>\n	</div>\n	<div class=\"login-box-body\">\n		<p class=\"login-box-msg\" translate>SIGNIN_INTRO</p>\n		<form\n			method=\"post\"\n			name=\"signinForm\"\n			ng-submit=\"ctrl.signin(userName, userPassword)\"\n		>\n			<div class=\"form-group has-feedback\">\n				<label for=\"userName\" class=\"sr-only\" translate>SIGNIN_USERNAME</label>\n				<input type=\"text\" id=\"userName\" class=\"form-control\" name=\"userName\" ng-model=\"userName\" placeholder=\"{{ \'SIGNIN_USERNAME\' | translate }}\" required />\n				<span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n				<div ng-messages=\"signinForm.userName.$error\" ng-if=\"signinForm.userName.$touched\" class=\"text-danger\">\n					<div ng-message=\"required\" translate>SIGNIN_USERNAME_REQUIRED</div>\n				</div>\n			</div>\n			<div class=\"form-group has-feedback\">\n				<label for=\"password\" class=\"sr-only\" translate>SIGNIN_PASSWORD</label>\n				<input type=\"password\" id=\"password\" class=\"form-control\" name=\"userPassword\" ng-model=\"userPassword\" placeholder=\"{{ \'SIGNIN_PASSWORD\' | translate }}\" required />\n				<span class=\"glyphicon glyphicon-lock form-control-feedback\"></span>\n				<div ng-messages=\"signinForm.userPassword.$error\" ng-if=\"signinForm.userPassword.$touched\" class=\"text-danger\">\n					<div ng-message=\"required\" translate>SIGNIN_PASSWORD_REQUIRED</div>\n				</div>\n			</div>\n			<div\n				ng-if=\"ctrl.authenticationError\"\n				class=\"text-danger\"\n				translate\n			>SIGNIN_ERROR</div>\n			<div>\n				<button\n					type=\"submit\"\n					class=\"btn btn-primary btn-block btn-flat\"\n					ng-disabled=\"signinForm.$invalid\"\n					translate\n				>SIGNIN_SUBMIT</button>\n			</div>\n		</form>\n		<div >\n			<a ui-sref=\"^.recoverPassword\" translate>SIGNIN_FORGET_PASSWORD</a>\n		</div>\n	</div>\n</div>\n");
$templateCache.put("adama-web/crud/btn-create.html","<div class=\"btn-group pull-right\">\n	<a\n		ui-sref=\".create\"\n		class=\"btn btn-default\"\n	>\n		<span class=\"glyphicon glyphicon-plus\"></span>\n		<span translate>CRUD_NEW</span>\n	</a>\n\n	<div class=\"btn-group\">\n		<button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n			<span class=\"caret\"></span>\n		</button>\n		<ul class=\"dropdown-menu dropdown-menu-right\">\n			<li>\n				<a ui-sref=\".importXls($ctrl.routeMapping)\">\n					<i class=\"fa fa-file-excel-o\"></i>\n					<span translate>CRUD_MASS_IMPORT</span>\n				</a>\n			</li>\n			<li>\n				<a ui-sref=\".exportXls($ctrl.routeMapping)\">\n					<i class=\"fa fa-file-excel-o\"></i>\n					<span translate>CRUD_MASS_EXPORT</span>\n				</a>\n			</li>\n		</ul>\n	</div>\n</div>\n");
$templateCache.put("adama-web/crud/crud-action-dropdown.html","<div class=\"dropdown\">\n	<button class=\"btn btn-default btn-xs dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\n		<i class=\"glyphicon glyphicon-cog\"></i>\n		<span class=\"caret\"></span>\n	</button>\n	<ul class=\"dropdown-menu dropdown-menu-right\">\n		<li>\n			<a ui-sref=\".view($ctrl.routeMapping)\">\n				<i class=\"glyphicon glyphicon-eye-open\"></i>\n				<span translate>CRUD_ACTION_VIEW</span>\n			</a>\n		</li>\n		<li>\n			<a ui-sref=\".edit($ctrl.routeMapping)\">\n				<i class=\"glyphicon glyphicon-pencil\"></i>\n				<span translate>CRUD_ACTION_EDIT</span>\n			</a>\n		</li>\n		<li>\n			<a ui-sref=\".delete($ctrl.routeMapping)\">\n				<i class=\"glyphicon glyphicon-trash\"></i>\n				<span translate>CRUD_ACTION_DELETE</span>\n			</a>\n		</li>\n	</ul>\n</div>\n");
$templateCache.put("adama-web/crud/crud-search-field.html","<form\n	class=\"form-inline pull-right crud-search-box\"\n	name=\"searchForm\"\n	ng-submit=\"$ctrl.search()\"\n>\n	<div class=\"input-group\">\n		<label for=\"fullSearch\" class=\"sr-only\" translate>CRUD_FORM_SEARCH</label>\n		<input\n			type=\"text\"\n			class=\"form-control\"\n			id=\"fullSearch\"\n			placeholder=\"{{ \'CRUD_FORM_SEARCH\' | translate }}\"\n			ng-model=\"$ctrl.searchValue\"\n		/>\n		<span class=\"input-group-btn\">\n			<button\n				type=\"submit\"\n				class=\"btn btn-default\"\n				ng-disabled=\"searchForm.$invalid\"\n			>\n				<i class=\"fa fa-search\"></i>\n				<span class=\"sr-only\" translate>CRUD_FORM_SEARCH_SUBMIT</span>\n			</button>\n		</span>\n	</div>\n</form>\n");
$templateCache.put("adama-web/crud/modal-btn-back-to-list.html","<button\n	class=\"btn btn-warning pull-left\"\n	type=\"button\"\n	ng-click=\"ctrl.dismiss()\"\n	translate\n>CRUD_BACK_TO_LIST</button>\n");
$templateCache.put("adama-web/crud/modal-btn-cancel.html","<button\n	class=\"btn btn-warning pull-left\"\n	type=\"button\"\n	ng-click=\"ctrl.dismiss()\"\n	translate\n>CRUD_CANCEL</button>\n");
$templateCache.put("adama-web/crud/modal-btn-confirm-delete.html","<button\n	class=\"btn btn-primary\"\n	type=\"submit\"\n	ng-click=\"ctrl.confirmDelete()\"\n	translate\n>CRUD_CONFIRM_DELETE</button>\n");
$templateCache.put("adama-web/crud/modal-btn-confirm-edit.html","<button\n	class=\"btn btn-primary\"\n	type=\"submit\"\n	ng-click=\"ctrl.save()\"\n	ng-if=\"ctrl.isEdition\"\n	ng-disabled=\"form.$invalid\"\n	translate\n>CRUD_CONFIRM_EDIT</button>\n<button\n	class=\"btn btn-primary\"\n	type=\"submit\"\n	ng-click=\"ctrl.save()\"\n	ng-if=\"!ctrl.isEdition\"\n	ng-disabled=\"form.$invalid\"\n	translate\n>CRUD_CONFIRM_SAVE</button>\n");
$templateCache.put("adama-web/crud/modal-btn-confirm-export-xls.html","<button\n	class=\"btn btn-primary\"\n	type=\"submit\"\n	ng-click=\"ctrl.confirmExportXls()\"\n	translate\n	ng-disabled=\"ctrl.loading\"\n>CRUD_CONFIRM_EXPORT</button>\n");
$templateCache.put("adama-web/crud/modal-btn-confirm-import-xls.html","<button\n	class=\"btn btn-primary\"\n	type=\"submit\"\n	ng-click=\"ctrl.confirmImportXls()\"\n	translate\n	ng-disabled=\"!ctrl.file || ctrl.loading\"\n>CRUD_CONFIRM_IMPORT</button>\n");
$templateCache.put("adama-web/user/user-delete.html","<div>\n	<div class=\"modal-header\">\n		<h4 translate>USER_TITLE_DELETE</h4>\n	</div>\n	<div class=\"modal-body\">\n		<jh-alert-error></jh-alert-error>\n		<span translate>CRUD_DELETE_MESSAGE</span>\n	</div>\n	<div class=\"modal-footer\">\n		<modal-btn-cancel></modal-btn-cancel>\n		<modal-btn-confirm-delete></modal-btn-confirm-delete>\n	</div>\n</div>\n");
$templateCache.put("adama-web/user/user-edit.html","<form name=\"form\">\n	<div class=\"modal-header\">\n		<h4 ng-if=\"ctrl.isEdition\" translate>USER_TITLE_EDIT</h4>\n		<h4 ng-if=\"!ctrl.isEdition\" translate>USER_TITLE_NEW</h4>\n	</div>\n	<div class=\"modal-body\">\n		<jh-alert-error></jh-alert-error>\n		<input\n			type=\"text\"\n			name=\"login\"\n			placeholder=\"{{\'USER_FORM_LOGIN\' | translate}}\"\n			ng-model=\"ctrl.entity.login\"\n			ng-readonly=\"ctrl.isEdition\"\n			required\n			maxlength=\"50\"\n			lazy-control\n			lazy-control-label-key=\"USER_FORM_LOGIN\"\n		/>\n		<div ng-messages=\"form.login.$error\" ng-if=\"form.login.$touched\">\n			<div ng-message=\"required\" translate>CRUD_FORM_ERROR_REQUIRED</div>\n			<div ng-message=\"maxlength\" translate translate-values=\"{maxlength: 50}\">CRUD_FORM_ERROR_MAXLENGTH</div>\n		</div>\n		<input\n			type=\"text\"\n			name=\"firstName\"\n			placeholder=\"{{\'USER_FORM_FIRSTNAME\' | translate}}\"\n			ng-model=\"ctrl.entity.firstName\"\n			maxlength=\"50\"\n			required\n			lazy-control\n			lazy-control-label-key=\"USER_FORM_FIRSTNAME\"\n		/>\n		<div ng-messages=\"form.firstName.$error\" ng-if=\"form.firstName.$touched\">\n			<div ng-message=\"required\" translate>CRUD_FORM_ERROR_REQUIRED</div>\n			<div ng-message=\"maxlength\" translate translate-values=\"{maxlength: 50}\">CRUD_FORM_ERROR_MAXLENGTH</div>\n		</div>\n		<input\n			type=\"text\"\n			name=\"lastName\"\n			placeholder=\"{{\'USER_FORM_LASTNAME\' | translate}}\"\n			ng-model=\"ctrl.entity.lastName\"\n			maxlength=\"50\"\n			required\n			lazy-control\n			lazy-control-label-key=\"USER_FORM_LASTNAME\"\n		/>\n		<div ng-messages=\"form.lastName.$error\" ng-if=\"form.lastName.$touched\">\n			<div ng-message=\"required\" translate>CRUD_FORM_ERROR_REQUIRED</div>\n			<div ng-message=\"maxlength\" translate translate-values=\"{maxlength: 50}\">CRUD_FORM_ERROR_MAXLENGTH</div>\n		</div>\n		<input\n			type=\"email\"\n			name=\"email\"\n			placeholder=\"{{\'USER_FORM_EMAIL\' | translate}}\"\n			ng-model=\"ctrl.entity.email\"\n			required\n			maxlength=\"100\"\n			lazy-control\n			lazy-control-label-key=\"USER_FORM_EMAIL\"\n		/>\n		<div ng-messages=\"form.email.$error\" ng-if=\"form.email.$touched\">\n			<div ng-message=\"required\" translate>CRUD_FORM_ERROR_REQUIRED</div>\n			<div ng-message=\"email\" translate>CRUD_FORM_ERROR_EMAIL</div>\n			<div ng-message=\"maxlength\" translate translate-values=\"{maxlength: 100}\">CRUD_FORM_ERROR_MAXLENGTH</div>\n		</div>\n		<ds-language data=\"languages\"></ds-language>\n		<select\n			name=\"langKey\"\n			ng-model=\"ctrl.entity.langKey\"\n			ng-options=\"language as language for language in languages track by language\"\n			lazy-control\n			lazy-control-label-key=\"USER_FORM_LANGUAGE\"\n		></select>\n		<ds-authorities data=\"authorities\"></ds-authorities>\n		<select\n			multiple\n			name=\"authority\"\n			ng-model=\"ctrl.entity.authorities\"\n			ng-options=\"authority for authority in authorities\"\n			lazy-control\n			lazy-control-label-key=\"USER_FORM_AUTHORITIES\"\n		></select>\n	</div>\n	<div class=\"modal-footer\">\n		<modal-btn-cancel></modal-btn-cancel>\n		<modal-btn-confirm-edit></modal-btn-confirm-edit>\n	</div>\n</form>\n");
$templateCache.put("adama-web/user/user-export-xls.html","<div>\n	<div class=\"modal-header\">\n		<h4 translate>USER_TITLE_EXPORT_XLS</h4>\n	</div>\n	<div class=\"modal-body\">\n		<jh-alert-error></jh-alert-error>\n		<span translate>CRUD_EXPORT_XLS_MESSAGE</span>\n	</div>\n	<div class=\"modal-footer\">\n		<modal-btn-cancel></modal-btn-cancel>\n		<modal-btn-confirm-export-xls></modal-btn-confirm-export-xls>\n	</div>\n</div>\n");
$templateCache.put("adama-web/user/user-import-xls.html","<form name=\"form\" novalidate>\n	<div class=\"modal-header\">\n		<h4 translate>USER_TITLE_IMPORT_XLS</h4>\n	</div>\n	<div class=\"modal-body\">\n		<jh-alert-error></jh-alert-error>\n		<span translate>CRUD_IMPORT_XLS_MESSAGE</span>\n		<label\n			class=\"file-upload--zone file-upload--dropzone\"\n			ng-show=\"!ctrl.file && !ctrl.loading\"\n			ngf-drop\n			ng-model=\"ctrl.file\"\n			ngf-drag-over-class=\"\'dragover\'\"\n			ngf-multiple=\"false\"\n			ngf-pattern=\"\'.xls\'\"\n		>\n			<span translate>FILEUPLOAD_DROPZONE_LABEL</span>\n			<span class=\"only-dragover\" translate>FILEUPLOAD_DROPZONE_LABEL_DROP</span>\n			<input\n				type=\"file\"\n				name=\"file\"\n				id=\"fileInput\"\n				ng-model=\"ctrl.file\"\n				ngf-select\n				ngf-pattern=\"\'.xls\'\"\n			/>\n		</label>\n		<div\n			class=\"file-upload--zone\"\n			ng-click=\"ctrl.file = undefined\"\n			ng-show=\"ctrl.file && !ctrl.loading\"\n		>\n			<span translate>FILEUPLOAD_RESET</span>\n		</div>\n	</div>\n	<div class=\"modal-footer\">\n		<modal-btn-cancel></modal-btn-cancel>\n		<modal-btn-confirm-import-xls></modal-btn-confirm-import-xls>\n	</div>\n</form>\n");
$templateCache.put("adama-web/user/user-list.html","<div class=\"content-wrapper\">\n	<section class=\"content-header crud-content-header\">\n		<btn-create></btn-create>\n		<crud-search-field\n			table-params=\"ctrl.tableParams\"\n		></crud-search-field>\n		<h1 translate>USER_TITLE_LIST</h1>\n	</section>\n	<section class=\"content\">\n		<div class=\"box box-primary\">\n			<div class=\"box-body\">\n				<div class=\"table-responsive\">\n					<ds-principal-identity data=\"currentAccount\"></ds-principal-identity>\n					<table\n						class=\"table table-bordered table-striped\"\n						ng-table=\"ctrl.tableParams\"\n						template-pagination=\"adama-web/ark/ngtable/ngtable-pager.html\"\n					>\n						<tr ng-repeat=\"user in $data\">\n							<td\n								header=\"\'adama-web/ark/ngtable/ngtable-checkbox.html\'\"\n							>\n								<input type=\"checkbox\" ng-model=\"user.isSelected\" />\n							</td>\n							<td\n								data-title=\"\'USER_LIST_LOGIN\' | translate\"\n								sortable=\"\'login\'\"\n							>{{user.login}}</td>\n							<td\n								data-title=\"\'USER_LIST_MAIL\' | translate\"\n								sortable=\"\'email\'\"\n							>{{user.email}}</td>\n							<td\n								data-title=\"\'USER_LIST_LANGUAGE\' | translate\"\n								sortable=\"\'langKey\'\"\n						   	>{{user.langKey}}</td>\n							<td\n								data-title=\"\'USER_LIST_AUTHORITIES\' | translate\"\n							>\n								<div ng-repeat=\"authority in user.authorities\">\n									<span class=\"label label-info\">{{ authority }}</span>\n								</div>\n							</td>\n							<td class=\"text-right\">\n								<crud-action-dropdown route-mapping=\"{login:user.login}\"></crud-action-dropdown>\n							</td>\n						</tr>\n					</table>\n				</div>\n			</div>\n		</div>\n	</section>\n</div>\n");
$templateCache.put("adama-web/user/user-view.html","<div>\n	<div class=\"modal-header\">\n		<h4 translate>USER_TITLE_VIEW</h4>\n	</div>\n	<div class=\"modal-body horizontal-form\">\n		<view-attribute label-key=\"USER_FORM_LOGIN\" value=\"ctrl.entity.login\"></view-attribute>\n		<view-attribute label-key=\"USER_FORM_FIRSTNAME\" value=\"ctrl.entity.firstName\"></view-attribute>\n		<view-attribute label-key=\"USER_FORM_LASTNAME\" value=\"ctrl.entity.lastName\"></view-attribute>\n		<view-attribute label-key=\"USER_FORM_EMAIL\" value=\"ctrl.entity.email\"></view-attribute>\n		<view-attribute label-key=\"USER_FORM_LANGUAGE\" value=\"ctrl.entity.langKey\"></view-attribute>\n		<view-attribute label-key=\"USER_FORM_AUTHORITIES\">\n			<ul>\n				<li\n					ng-repeat=\"authority in ctrl.entity.authorities\"\n					translate\n				>{{ authority }}</li>\n			</ul>\n		</view-attribute>\n	</div>\n	<div class=\"modal-footer\">\n		<modal-btn-back-to-list></modal-btn-back-to-list>\n	</div>\n</div>\n");
$templateCache.put("adama-web/account/password/password.html","<div class=\"content-wrapper\">\n	<section class=\"content-header\">\n		<h1 translate>ACCOUNT_PASSWORD_TITLE</h1>\n	</section>\n	<section class=\"content\">\n		<div class=\"box box-primary\">\n			<form name=\"form\" novalidate ng-submit=\"ctrl.changePassword()\">\n				<div class=\"box-body\">\n					<input\n						type=\"password\"\n						name=\"password\"\n						placeholder=\"{{\'ACCOUNT_PASSWORD_NEWPASSWORD_PLACEHOLDER\' | translate}}\"\n						ng-model=\"ctrl.password\"\n						minlength=5\n						maxlength=50\n						required\n						lazy-control\n						lazy-control-label-key=\"ACCOUNT_PASSWORD_NEWPASSWORD\"\n					/>\n					<div ng-messages=\"form.password.$error\" ng-if=\"form.password.$touched\">\n						<div ng-message=\"required\" translate>ACCOUNT_PASSWORD_NEWPASSWORD_REQUIRED</div>\n						<div ng-message=\"minlength\" translate>ACCOUNT_PASSWORD_NEWPASSWORD_MINLENGTH</div>\n						<div ng-message=\"maxlength\" translate>ACCOUNT_PASSWORD_NEWPASSWORD_MAXLENGTH</div>\n					</div>\n					<input\n						type=\"password\"\n						name=\"confirmPassword\"\n						placeholder=\"{{\'ACCOUNT_PASSWORD_CONFIRM_NEWPASSWORD_PLACEHOLDER\' | translate}}\"\n						ng-model=\"ctrl.confirmPassword\"\n						minlength=5\n						maxlength=50\n						required\n						lazy-control\n						lazy-control-label-key=\"ACCOUNT_PASSWORD_CONFIRM_NEWPASSWORD\"\n						ng-pattern=\"ctrl.password\"\n					/>\n					<div ng-messages=\"form.confirmPassword.$error\" ng-if=\"form.confirmPassword.$touched\">\n						<div ng-message=\"required\" translate>ACCOUNT_PASSWORD_CONFIRM_NEWPASSWORD_REQUIRED</div>\n						<div ng-message=\"minlength\" translate>ACCOUNT_PASSWORD_CONFIRM_NEWPASSWORD_MINLENGTH</div>\n						<div ng-message=\"maxlength\" translate>ACCOUNT_PASSWORD_CONFIRM_NEWPASSWORD_MAXLENGTH</div>\n						<div ng-message=\"pattern\" translate>ACCOUNT_PASSWORD_CONFIRM_NEWPASSWORD_PATTERN</div>\n					</div>\n				</div>\n				<div class=\"box-footer\">\n					<button\n						type=\"submit\"\n						class=\"btn btn-primary\"\n						ng-disabled=\"form.$invalid\"\n						translate\n					>ACCOUNT_PASSWORD_SUBMIT</button>\n				</div>\n			</form>\n		</div>\n	</section>\n</div>\n");
$templateCache.put("adama-web/account/settings/settings.html","<div class=\"content-wrapper\">\n	<section class=\"content-header\">\n		<h1 translate>ACCOUNT_SETTINGS_TITLE</h1>\n	</section>\n	<section class=\"content\">\n		<div class=\"box box-primary\">\n			<form name=\"form\" novalidate ng-submit=\"ctrl.save()\">\n				<div class=\"box-body\">\n					<input\n						type=\"text\"\n						name=\"firstName\"\n						placeholder=\"{{\'ACCOUNT_SETTINGS_FIRSTNAME_PLACEHOLDER\' | translate}}\"\n						ng-model=\"ctrl.settingsAccount.firstName\"\n						minlength=1\n						maxlength=50\n						required\n						lazy-control\n						lazy-control-label-key=\"ACCOUNT_SETTINGS_FIRSTNAME\"\n					/>\n					<div ng-messages=\"form.firstName.$error\" ng-if=\"form.firstName.$touched\">\n						<div ng-message=\"required\" translate>ACCOUNT_SETTINGS_FIRSTNAME_REQUIRED</div>\n						<div ng-message=\"maxlength\" translate>ACCOUNT_SETTINGS_FIRSTNAME_MAXLENGTH</div>\n					</div>\n					<input\n						type=\"text\"\n						name=\"lastName\"\n						placeholder=\"{{\'ACCOUNT_SETTINGS_LASTNAME_PLACEHOLDER\' | translate}}\"\n						ng-model=\"ctrl.settingsAccount.lastName\"\n						minlength=1\n						maxlength=50\n						required\n						lazy-control\n						lazy-control-label-key=\"ACCOUNT_SETTINGS_LASTNAME\"\n					/>\n					<div ng-messages=\"form.lastName.$error\" ng-if=\"form.lastName.$touched\">\n						<div ng-message=\"required\" translate>ACCOUNT_SETTINGS_FIRSTNAME_REQUIRED</div>\n						<div ng-message=\"maxlength\" translate>ACCOUNT_SETTINGS_FIRSTNAME_MAXLENGTH</div>\n					</div>\n					<input\n						type=\"email\"\n						name=\"email\"\n						placeholder=\"{{\'ACCOUNT_SETTINGS_EMAIL_PLACEHOLDER\' | translate}}\"\n						ng-model=\"ctrl.settingsAccount.email\"\n						minlength=5\n						maxlength=100\n						required\n						lazy-control\n						lazy-control-label-key=\"ACCOUNT_SETTINGS_EMAIL\"\n					/>\n					<div ng-messages=\"form.email.$error\" ng-if=\"form.email.$touched\">\n						<div ng-message=\"required\" translate>ACCOUNT_SETTINGS_EMAIL_REQUIRED</div>\n						<div ng-message=\"email\" translate>ACCOUNT_SETTINGS_EMAIL_EMAIL</div>\n						<div ng-message=\"maxlength\" translate>ACCOUNT_SETTINGS_EMAIL_MAXLENGTH</div>\n					</div>\n					<ds-language data=\"languages\"></ds-language>\n					<select\n						name=\"langKey\"\n						ng-model=\"ctrl.settingsAccount.langKey\"\n						ng-options=\"code as code for code in languages\"\n						lazy-control\n						lazy-control-label-key=\"ACCOUNT_SETTINGS_LANGUAGE\"\n					></select>\n				</div>\n				<div class=\"box-footer\">\n					<button\n						type=\"submit\"\n						class=\"btn btn-primary\"\n						ng-disabled=\"form.$invalid\"\n						translate\n					>ACCOUNT_SETTINGS_SUBMIT</button>\n				</div>\n			</form>\n		</div>\n	</section>\n</div>\n");
$templateCache.put("adama-web/ark/ark-footer/ark-footer.html","<footer class=\"main-footer\">\n	<div class=\"pull-right\">\n		<span class=\"hidden-xs\">Version 1.0001</span>\n		<language-selector></language-selector>\n	</div>\n	<strong>\n		Copyright &copy;\n		<span>2016</span>\n		<a href=\"http://www.adama-development.com/\" target=\"_blank\">Adama Development</a>\n	</strong>\n</footer>\n<layout-fix></layout-fix>\n\n");
$templateCache.put("adama-web/ark/ark-header/ark-header.html","<header class=\"main-header\">\n	<a class=\"logo\" ui-sref=\"app.main\">\n		<span class=\"logo-mini\">\n			<b translate>APP_NAME_SHORT</b>\n		</span>\n		<span class=\"logo-lg\">\n			<b translate>APP_NAME</b>\n		</span>\n	</a>\n	<nav class=\"navbar navbar-static-top\" role=\"navigation\">\n		<!-- Sidebar toggle button-->\n		<a class=\"noajax sidebar-toggle\" data-toggle=\"offcanvas\" role=\"button\">\n			<span class=\"sr-only\" translate>TOGGLE_NAVIGATION</span>\n		</a>\n		<user-info></user-info>\n	</nav>\n</header>\n<layout-fix></layout-fix>\n");
$templateCache.put("adama-web/ark/language-selector/language-selector.html","<div class=\"dropdown pull-right dropup\">\n	<button type=\"button\" class=\"btn btn-link btn-xs dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"true\">\n		<i class=\"famfamfam-flags\" ng-class=\"$ctrl.currentLanguage\"></i>\n	</button>\n	<ul class=\"dropdown-menu\">\n		<li ng-repeat=\"language in $ctrl.languages\">\n			<a ng-click=\"$ctrl.changeLanguage(language.code)\">\n				<span class=\"famfamfam-flags\" ng-class=\"language.cssCLass\"></span>\n				<span translate>{{ language.labelKey }}</span></a>\n			</a>\n		</li>\n	</ul>\n</div>\n");
$templateCache.put("adama-web/ark/menu/main-navigation.html","<ul class=\"sidebar-menu\">\n	<li\n		ng-repeat=\"item in $ctrl.menuItems | orderBy:\'rank\'\"\n		ng-class=\"{\'header\':item.divider, \'treeview\': !item.url && !item.divider}\"\n	>\n		<span ng-if=\"item.divider\">{{ item.label }}</span>\n		<a ng-href=\"{{::item.url}}\" ng-if=\"item.url\">\n			<i ng-class=\"item.iconClass\" ng-if=\"item.iconClass\"></i>\n			<span>{{ item.label }}</span>\n		</a>\n		<a ng-if=\"!item.url && !item.divider\">\n			<i ng-class=\"item.iconClass\" ng-if=\"item.iconClass\"></i>\n			<span>{{ item.label }}</span>\n			<i class=\"fa fa-angle-left pull-right\"></i>\n		</a>\n		<ul class=\"treeview-menu\" ng-if=\"!item.url && !item.divider\">\n			<li ng-repeat=\"subItem in item.subItems | orderBy:\'rank\'\">\n				<a\n					ng-href=\"{{::subItem.url}}\"\n				>{{ subItem.label }}</a>\n			</li>\n		</ul>\n	</li>\n</ul>\n<script>\n$.AdminLTE.tree(\'.sidebar\');\n</script>\n");
$templateCache.put("adama-web/ark/ngtable/ngtable-checkbox.html","<select-all\n	entity-list=\"$data\"\n></select-all>\n");
$templateCache.put("adama-web/ark/ngtable/ngtable-pager.html","<div class=\"angular-table-pager\">\n	<div \n		class=\"col-sm-5\"\n		translate=\"PAGER_RESULT\"\n		translate-values=\"{ total: params.total() }\"\n	></div>\n	<div class=\"col-sm-7\">\n		<ul class=\"pagination pagination-sm\" ng-show=\"pages\">\n			<li\n				ng-repeat=\"page in pages\"\n				ng-class=\"{\'active\': page.current}\"\n				ng-switch=\"page.type\"\n			>\n				<a ng-switch-when=\"prev\" ng-click=\"params.page(page.number)\" ng-if=\"page.active\">\n					&lt;\n				</a>\n				<a ng-switch-when=\"next\" ng-click=\"params.page(page.number)\" ng-if=\"page.active\">\n					&gt;\n				</a>\n				<a\n					ng-click=\"params.page(page.number)\"\n					ng-switch-default\n				>{{ page.number }}</a>\n			</li>\n		</ul>\n	</div>\n</div>\n");
$templateCache.put("adama-web/ark/select-all/select-all.html","<i\n	class=\"glyphicon\"\n	ng-class=\"{true:\'glyphicon-unchecked\', false:\'glyphicon-check\'}[$ctrl.isAllChecked]\"\n	ng-click=\"$ctrl.checkAll()\"\n></i>\n");
$templateCache.put("adama-web/ark/user-info/user-info.html","<div class=\"navbar-custom-menu\">\n	<ul class=\"nav navbar-nav\">\n		<li class=\"dropdown user user-menu\">\n			<ds-principal-identity data=\"$ctrl.account\"></ds-principal-identity>\n			<a class=\"dropdown-toggle noajax\" data-toggle=\"dropdown\" aria-expanded=\"false\">\n				<img src=\"img/male-fill-circle-512.png\" class=\"user-image\"></img>\n				<span class=\"hidden-xs\">\n					<span>\n						{{ $ctrl.account.firstName }}\n						{{ $ctrl.account.lastName }}\n					</span>\n				</span>\n			</a>\n			<ul class=\"dropdown-menu\">\n				<li class=\"user-header\">\n					<img src=\"img/male-fill-circle-512.png\" class=\"img-circle\" />\n					<p>\n						<span>\n							{{ $ctrl.account.firstName }}\n							{{ $ctrl.account.lastName }}\n						</span>\n						<small>\n							<span ng-repeat=\"authority in $ctrl.account.authorities\"> {{ ::authority | translate }} </span>\n						</small>\n					</p>\n				</li>\n				<li class=\"user-footer\">\n					<div class=\"pull-left\">\n						<a ui-sref=\"app.personal.settings\" class=\"btn btn-default btn-flat\">\n							<i class=\"glyphicon glyphicon-user\"></i>\n							<span class=\"sr-only\" translate>USERINFO_PROFILE</span>\n						</a>\n					</div>\n					<div class=\"pull-left\">\n						<a ui-sref=\"app.personal.password\" class=\"btn btn-default btn-flat\">\n							<i class=\"glyphicon glyphicon-lock\"></i>\n							<span class=\"sr-only\" translate>USERINFO_PASSWORD</span>\n						</a>\n					</div>\n					<div class=\"pull-right\">\n						<a class=\"btn btn-default btn-flat\" ng-click=\"$ctrl.signout()\">\n							<i class=\"glyphicon glyphicon-log-out\"></i>\n							<span class=\"sr-only\" translate>USERINFO_SIGNOUT</span>\n						</a>\n					</div>\n				</li>\n			</ul>\n		</li>\n	</ul>\n</div>\n");
$templateCache.put("adama-web/ark/view-attribute/view-attribute.html","<div class=\"row\">\n	<div class=\"col-sm-4\" translate>{{ $ctrl.labelKey }}</div>\n	<div class=\"col-sm-8\" ng-if=\"$ctrl.valueKey\">{{ $ctrl.value }}</div>\n	<div class=\"col-sm-8\" ng-if=\"!$ctrl.valueKey\" ng-transclude></div>\n</div>\n");}]);