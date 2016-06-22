angular.module('adama-web').run(['$templateCache', function($templateCache) {$templateCache.put('adama-web/alert/adama-alert-error.html','<div class="alerts" ng-if="$ctrl.alerts && $ctrl.alerts.length">\n\t<div ng-repeat="alert in $ctrl.alerts" class="alert alert-dismissible" ng-class="\'alert-\' + alert.type">\n\t\t<button type="button" class="close" data-dismiss="alert" aria-hidden="true">\xD7</button>\n\t\t{{ alert.msg }}\n\t</div>\n</div>\n');
$templateCache.put('adama-web/alert/adama-alert.html','<div class="content-wrapper" ng-cloak ng-if="$ctrl.alerts && $ctrl.alerts.length">\n\t<div class="box-body">\n\t\t<div ng-repeat="alert in $ctrl.alerts" class="alert alert-dismissible" ng-class="\'alert-\' + alert.type">\n\t\t\t<button type="button" class="close" data-dismiss="alert" aria-hidden="true">\xD7</button>\n\t\t\t{{ alert.msg }}\n\t\t</div>\n\t</div>\n</div>\n');
$templateCache.put('adama-web/auth/accessDenied.html','<div class="login-box">\n\t<div class="login-logo">\n\t\t<b translate>APP_NAME</b>\n\t</div>\n\t<div class="login-box-body">\n\t\t<p class="login-box-msg" translate>ACCESS_DENIED_INTRO</p>\n\t\t<p class="login-box-msg">\n\t\t\t<a ui-sref="^.signin">\n\t\t\t\t<i class="glyphicon glyphicon-arrow-left"></i>\n\t\t\t\t<span translate>ACCESS_DENIED_BACK_TO_LOGIN</span>\n\t\t\t</a>\n\t\t</p>\n\t</div>\n</div>\n');
$templateCache.put('adama-web/auth/recoverPassword.html','<div class="login-box">\n\t<div class="login-logo">\n\t\t<b translate>APP_NAME</b>\n\t</div>\n\t<div class="login-box-body">\n\t\t<p class="login-box-msg" translate>RECOVER_INTRO</p>\n\t\t<form\n\t\t\tmethod="post"\n\t\t\tname="recoverForm"\n\t\t\tng-submit="ctrl.recover(userEmail)"\n\t\t>\n\t\t\t<div class="form-group has-feedback">\n\t\t\t\t<label for="email" class="sr-only" translate>RECOVER_MAIL</label>\n\t\t\t\t<input type="email" id="email" class="form-control" name="userEmail" ng-model="userEmail" placeholder="{{ \'RECOVER_MAIL\' | translate }}" required />\n\t\t\t\t<span class="glyphicon glyphicon-envelope form-control-feedback"></span>\n\t\t\t\t<div ng-messages="recoverForm.userEmail.$error" ng-if="recoverForm.userEmail.$touched" class="text-danger">\n\t\t\t\t\t<div ng-message="required" translate>RECOVER_MAIL_REQUIRED</div>\n\t\t\t\t\t<div ng-message="email" translate>RECOVER_MAIL_EMAIL</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div\n\t\t\t\tng-if="ctrl.recoverError"\n\t\t\t\tclass="text-danger"\n\t\t\t\ttranslate\n\t\t\t>RECOVER_ERROR</div>\n\t\t\t<div\n\t\t\t\tng-if="ctrl.errorEmailNotExists"\n\t\t\t\tclass="text-danger"\n\t\t\t\ttranslate\n\t\t\t>RECOVER_ERROR_EMAIL_NOT_EXIST</div>\n\t\t\t<div\n\t\t\t\tng-if="ctrl.recoverSuccess"\n\t\t\t\tclass="text-danger"\n\t\t\t\ttranslate\n\t\t\t>RECOVER_SUCCESS</div>\n\t\t\t<div>\n\t\t\t\t<button\n\t\t\t\t\ttype="submit"\n\t\t\t\t\tclass="btn btn-primary btn-block btn-flat"\n\t\t\t\t\tng-disabled="recoverForm.$invalid || ctrl.loading"\n\t\t\t\t\ttranslate\n\t\t\t\t>RECOVER_SUBMIT</button>\n\t\t\t</div>\n\t\t\t<!-- \n\t\t\t\tTODO feedback management : Thank you! You will receive an email with instructions to reset your password\n\t\t\t-->\n\t\t</form>\n\t\t<div>\n\t\t\t<a ui-sref="^.signin">\n\t\t\t\t<i class="glyphicon glyphicon-arrow-left"></i>\n\t\t\t\t<span translate>RECOVER_BACK_TO_LOGIN</span>\n\t\t\t</a>\n\t\t</div>\n\t</div>\n</div>\n');
$templateCache.put('adama-web/auth/resetPassword.html','<div class="login-box">\n\t<div class="login-logo">\n\t\t<b translate>APP_NAME</b>\n\t</div>\n\t<div class="login-box-body">\n\t\t<p\n\t\t\tclass="login-box-msg"\n\t\t\tng-if="!ctrl.messageForMobileUser"\n\t\t\ttranslate\n\t\t>RESET_PASSWORD_INTRO</p>\n\t\t<form\n\t\t\tmethod="post"\n\t\t\tname="resetForm"\n\t\t\tng-submit="ctrl.resetPassword(userPassword)"\n\t\t\tng-if="!ctrl.messageForMobileUser"\n\t\t>\n\t\t\t<div class="form-group has-feedback">\n\t\t\t\t<label for="password" class="sr-only" translate>RESET_PASSWORD_PASSWORD</label>\n\t\t\t\t<input\n\t\t\t\t\ttype="password"\n\t\t\t\t\tid="password"\n\t\t\t\t\tclass="form-control"\n\t\t\t\t\tname="userPassword"\n\t\t\t\t\tng-model="userPassword"\n\t\t\t\t\tplaceholder="{{ \'RESET_PASSWORD_PASSWORD\' | translate }}"\n\t\t\t\t\trequired\n\t\t\t\t\tminlength="6"\n\t\t\t\t\tmaxlength="100"\n\t\t\t\t/>\n\t\t\t\t<span class="glyphicon glyphicon-lock form-control-feedback"></span>\n\t\t\t\t<div ng-messages="resetForm.userPassword.$error" ng-if="resetForm.userPassword.$touched" class="text-danger">\n\t\t\t\t\t<div ng-message="required" translate>RESET_PASSWORD_PASSWORD_REQUIRED</div>\n\t\t\t\t\t<div ng-message="minlength" translate>RESET_PASSWORD_PASSWORD_MINLENGTH</div>\n\t\t\t\t\t<div ng-message="maxlength" translate>RESET_PASSWORD_PASSWORD_MAXLENGTH</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="form-group has-feedback">\n\t\t\t\t<label for="password" class="sr-only" translate>RESET_PASSWORD_PASSWORD_CONFIRM</label>\n\t\t\t\t<input\n\t\t\t\t\ttype="password"\n\t\t\t\t\tid="password"\n\t\t\t\t\tclass="form-control"\n\t\t\t\t\tname="userPasswordConfirm"\n\t\t\t\t\tng-model="userPasswordConfirm"\n\t\t\t\t\tplaceholder="{{ \'RESET_PASSWORD_PASSWORD_CONFIRM\' | translate }}"\n\t\t\t\t\trequired\n\t\t\t\t\tng-pattern="{{ userPassword }}"\n\t\t\t\t\tmin="6"\n\t\t\t\t\tmin="100"\n\t\t\t\t/>\n\t\t\t\t<span class="glyphicon glyphicon-lock form-control-feedback"></span>\n\t\t\t\t<div ng-messages="resetForm.userPasswordConfirm.$error" ng-if="resetForm.userPasswordConfirm.$touched" class="text-danger">\n\t\t\t\t\t<div ng-message="required" translate>RESET_PASSWORD_PASSWORD_CONFIRM_REQUIRED</div>\n\t\t\t\t\t<div ng-message="pattern" translate>RESET_PASSWORD_PASSWORD_CONFIRM_MATCH</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div\n\t\t\t\tng-if="ctrl.resetError"\n\t\t\t\tclass="text-danger"\n\t\t\t\ttranslate\n\t\t\t>RESET_PASSWORD_ERROR</div>\n\t\t\t<div>\n\t\t\t\t<button\n\t\t\t\t\ttype="submit"\n\t\t\t\t\tclass="btn btn-primary btn-block btn-flat"\n\t\t\t\t\tng-disabled="resetForm.$invalid || ctrl.loading"\n\t\t\t\t\ttranslate\n\t\t\t\t>RESET_PASSWORD_SUBMIT</button>\n\t\t\t</div>\n\t\t</form>\n\t\t<div\n\t\t\tng-if="ctrl.messageForMobileUser"\n\t\t\ttranslate\n\t\t>RESET_PASSWORD_MESSAGE_FOR_MOBILE_USER</div>\n\t</div>\n</div>\n');
$templateCache.put('adama-web/auth/signin.html','<div class="login-box">\n\t<div class="login-logo">\n\t\t<b translate>APP_NAME</b>\n\t</div>\n\t<div class="login-box-body">\n\t\t<p class="login-box-msg" translate>SIGNIN_INTRO</p>\n\t\t<form\n\t\t\tmethod="post"\n\t\t\tname="signinForm"\n\t\t\tng-submit="ctrl.signin(userName, userPassword)"\n\t\t>\n\t\t\t<div class="form-group has-feedback">\n\t\t\t\t<label for="userName" class="sr-only" translate>SIGNIN_USERNAME</label>\n\t\t\t\t<input type="text" id="userName" class="form-control" name="userName" ng-model="userName" placeholder="{{ \'SIGNIN_USERNAME\' | translate }}" required />\n\t\t\t\t<span class="glyphicon glyphicon-user form-control-feedback"></span>\n\t\t\t\t<div ng-messages="signinForm.userName.$error" ng-if="signinForm.userName.$touched" class="text-danger">\n\t\t\t\t\t<div ng-message="required" translate>SIGNIN_USERNAME_REQUIRED</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="form-group has-feedback">\n\t\t\t\t<label for="password" class="sr-only" translate>SIGNIN_PASSWORD</label>\n\t\t\t\t<input\n\t\t\t\t\ttype="password"\n\t\t\t\t\tid="password"\n\t\t\t\t\tclass="form-control"\n\t\t\t\t\tname="userPassword"\n\t\t\t\t\tng-model="userPassword"\n\t\t\t\t\tplaceholder="{{ \'SIGNIN_PASSWORD\' | translate }}"\n\t\t\t\t\trequired\n\t\t\t\t\tminlength="6"\n\t\t\t\t\tminlength="100"\n\t\t\t\t/>\n\t\t\t\t<span class="glyphicon glyphicon-lock form-control-feedback"></span>\n\t\t\t\t<div ng-messages="signinForm.userPassword.$error" ng-if="signinForm.userPassword.$touched" class="text-danger">\n\t\t\t\t\t<div ng-message="required" translate>SIGNIN_PASSWORD_REQUIRED</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div\n\t\t\t\tng-if="ctrl.authenticationError"\n\t\t\t\tclass="text-danger"\n\t\t\t\ttranslate\n\t\t\t>SIGNIN_ERROR</div>\n\t\t\t<div>\n\t\t\t\t<button\n\t\t\t\t\ttype="submit"\n\t\t\t\t\tclass="btn btn-primary btn-block btn-flat"\n\t\t\t\t\tng-disabled="signinForm.$invalid"\n\t\t\t\t\ttranslate\n\t\t\t\t>SIGNIN_SUBMIT</button>\n\t\t\t</div>\n\t\t</form>\n\t\t<div >\n\t\t\t<a ui-sref="^.recoverPassword" translate>SIGNIN_FORGET_PASSWORD</a>\n\t\t</div>\n\t</div>\n</div>\n');
$templateCache.put('adama-web/binary-file-definition/binary-file-definition.html','<span class="file-upload--label" translate>{{ $ctrl.labelKey }}</span>\n<label\n\tclass="file-upload--zone file-upload--dropzone"\n\tng-show="!$ctrl.ngModel.$modelValue.id && !$ctrl.ongoingUpload"\n\tngf-drag-over-class="\'dragover\'"\n\tngf-multiple="false"\n\tngf-pattern="$ctrl.filePattern"\n\tngf-accept="$ctrl.filePattern"\n\tngf-drop="$ctrl.upload($files)"\n>\n\t<span translate>FILEUPLOAD_DROPZONE_LABEL</span>\n\t<span class="only-dragover" translate>FILEUPLOAD_DROPZONE_LABEL_DROP</span>\n\t<input\n\t\ttype="file"\n\t\tname="file"\n\t\tid="fileInput"\n\t\tng-model="$ctrl.file"\n\t\tngf-select="$ctrl.upload($ctrl.file)"\n\t\tngf-pattern="$ctrl.filePattern"\n\t\tngf-accept="$ctrl.filePattern"\n\t/>\n</label>\n<div\n\tng-show="$ctrl.ongoingUpload"\n>\n\t<i class="fa fa-spinner fa-spin" />\n\t<span translate>FILEUPLOAD_UPLOADING</span>\n</div>\n<div ng-show="$ctrl.error">\n\t<span translate>FILEUPLOAD_ERROR</span>\n</div>\n<div\n\tclass="file-upload--zone"\n\tng-click="$ctrl.resetFile()"\n\tng-show="$ctrl.ngModel.$modelValue.id && !$ctrl.ongoingUpload"\n>\n\t<ds-binary-file-url\n\t\tinput="$ctrl.ngModel.$modelValue"\n\t></ds-binary-file-url>\n\t<img\n\t\tng-src="{{ $ctrl.ngModel.$modelValue.url }}"\n\t\tng-if="$ctrl.isPicture"\n\t>\n\t<div>\n\t\t<span translate>FILEUPLOAD_RESET</span>\n\t\t<br />\n\t\t<span>"{{ $ctrl.ngModel.$modelValue.fileName }}"</span>\n\t</div>\n</div>\n');
$templateCache.put('adama-web/crud/btn-create.html','<div class="btn-group pull-right">\n\t<a\n\t\tui-sref=".create"\n\t\tclass="btn btn-default"\n\t\tng-if="!$ctrl.disableCreate"\n\t>\n\t\t<span class="glyphicon glyphicon-plus"></span>\n\t\t<span translate>CRUD_NEW</span>\n\t</a>\n\n\t<div class="btn-group"\n\t\tng-if="!$ctrl.disableAdditionnalAction"\n\t>\n\t\t<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">\n\t\t\t<span class="caret"></span>\n\t\t</button>\n\t\t<ul class="dropdown-menu dropdown-menu-right">\n\t\t\t<li\n\t\t\t\tng-if="!$ctrl.disableMassImport"\n\t\t\t>\n\t\t\t\t<a ui-sref=".importXls($ctrl.routeMapping)">\n\t\t\t\t\t<i class="fa fa-file-excel-o"></i>\n\t\t\t\t\t<span translate>CRUD_MASS_IMPORT</span>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li\n\t\t\t\tng-if="!$ctrl.disableMassExport"\n\t\t\t>\n\t\t\t\t<a ui-sref=".exportXls($ctrl.routeMapping)">\n\t\t\t\t\t<i class="fa fa-file-excel-o"></i>\n\t\t\t\t\t<span translate>CRUD_MASS_EXPORT</span>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li ng-transclude class="crud-transcluded-actions"></li>\n\t\t</ul>\n\t</div>\n</div>\n');
$templateCache.put('adama-web/crud/crud-action-dropdown.html','<div class="dropdown">\n\t<button class="btn btn-default btn-xs dropdown-toggle" type="button" data-toggle="dropdown">\n\t\t<i class="glyphicon glyphicon-cog"></i>\n\t\t<span class="caret"></span>\n\t</button>\n\t<ul class="dropdown-menu dropdown-menu-right">\n\t\t<li\n\t\t\tng-if="!$ctrl.disableView"\n\t\t>\n\t\t\t<a ui-sref=".view($ctrl.routeMapping)">\n\t\t\t\t<i class="glyphicon glyphicon-eye-open"></i>\n\t\t\t\t<span translate>CRUD_ACTION_VIEW</span>\n\t\t\t</a>\n\t\t</li>\n\t\t<li\n\t\t\tng-if="!$ctrl.disableEdit"\n\t\t>\n\t\t\t<a ui-sref=".edit($ctrl.routeMapping)">\n\t\t\t\t<i class="glyphicon glyphicon-pencil"></i>\n\t\t\t\t<span translate>CRUD_ACTION_EDIT</span>\n\t\t\t</a>\n\t\t</li>\n\t\t<li\n\t\t\tng-if="!$ctrl.disableDelete"\n\t\t>\n\t\t\t<a ui-sref=".delete($ctrl.routeMapping)">\n\t\t\t\t<i class="glyphicon glyphicon-trash"></i>\n\t\t\t\t<span translate>CRUD_ACTION_DELETE</span>\n\t\t\t</a>\n\t\t</li>\n\t\t<li ng-transclude class="crud-transcluded-actions"></li>\n\t</ul>\n</div>\n');
$templateCache.put('adama-web/crud/crud-custom-filter.html','<button\n\ttype="button"\n\tng-click="$ctrl.displayFiltered()"\n>\n\t<i class="glyphicon glyphicon-equalizer"></i>\n\t<span translate>{{ $ctrl.labelKey }}</span>\n</button>\n');
$templateCache.put('adama-web/crud/crud-search-field.html','<form\n\tclass="form-inline pull-right crud-search-box"\n\tname="searchForm"\n\tng-submit="$ctrl.search()"\n>\n\t<div class="input-group">\n\t\t<label for="fullSearch" class="sr-only" translate>CRUD_FORM_SEARCH</label>\n\t\t<input\n\t\t\ttype="text"\n\t\t\tclass="form-control"\n\t\t\tid="fullSearch"\n\t\t\tplaceholder="{{ \'CRUD_FORM_SEARCH\' | translate }}"\n\t\t\tng-model="$ctrl.searchValue"\n\t\t/>\n\t\t<span class="input-group-btn">\n\t\t\t<button\n\t\t\t\ttype="submit"\n\t\t\t\tclass="btn btn-default"\n\t\t\t\tng-disabled="searchForm.$invalid"\n\t\t\t>\n\t\t\t\t<i class="fa fa-search"></i>\n\t\t\t\t<span class="sr-only" translate>CRUD_FORM_SEARCH_SUBMIT</span>\n\t\t\t</button>\n\t\t</span>\n\t</div>\n</form>\n');
$templateCache.put('adama-web/crud/modal-btn-back-to-list.html','<button\n\tclass="btn btn-warning pull-left"\n\ttype="button"\n\tng-click="ctrl.dismiss()"\n\ttranslate\n>CRUD_BACK_TO_LIST</button>\n');
$templateCache.put('adama-web/crud/modal-btn-cancel.html','<button\n\tclass="btn btn-warning pull-left"\n\ttype="button"\n\tng-click="ctrl.dismiss()"\n\ttranslate\n>CRUD_CANCEL</button>\n');
$templateCache.put('adama-web/crud/modal-btn-confirm-delete.html','<button\n\tclass="btn btn-primary"\n\ttype="submit"\n\tng-click="ctrl.confirmDelete()"\n\ttranslate\n>CRUD_CONFIRM_DELETE</button>\n');
$templateCache.put('adama-web/crud/modal-btn-confirm-edit.html','<button\n\tclass="btn btn-primary"\n\ttype="submit"\n\tng-click="ctrl.save()"\n\tng-if="ctrl.isEdition"\n\tng-disabled="form.$invalid"\n\ttranslate\n>CRUD_CONFIRM_EDIT</button>\n<button\n\tclass="btn btn-primary"\n\ttype="submit"\n\tng-click="ctrl.save()"\n\tng-if="!ctrl.isEdition"\n\tng-disabled="form.$invalid"\n\ttranslate\n>CRUD_CONFIRM_SAVE</button>\n');
$templateCache.put('adama-web/crud/modal-btn-confirm-export-xls.html','<button\n\tclass="btn btn-primary"\n\ttype="submit"\n\tng-click="ctrl.confirmExportXls()"\n\ttranslate\n\tng-disabled="ctrl.loading"\n>CRUD_CONFIRM_EXPORT</button>\n');
$templateCache.put('adama-web/crud/modal-btn-confirm-import-xls.html','<button\n\tclass="btn btn-primary"\n\ttype="submit"\n\tng-click="ctrl.confirmImportXls()"\n\ttranslate\n\tng-disabled="!ctrl.file || ctrl.loading"\n>CRUD_CONFIRM_IMPORT</button>\n');
$templateCache.put('adama-web/user/user-delete.html','<div>\n\t<div class="modal-header">\n\t\t<h4 translate>USER_TITLE_DELETE</h4>\n\t</div>\n\t<div class="modal-body">\n\t\t<adama-alert-error></adama-alert-error>\n\t\t<span translate>CRUD_DELETE_MESSAGE</span>\n\t</div>\n\t<div class="modal-footer">\n\t\t<modal-btn-cancel></modal-btn-cancel>\n\t\t<modal-btn-confirm-delete></modal-btn-confirm-delete>\n\t</div>\n</div>\n');
$templateCache.put('adama-web/user/user-edit.html','<form name="form">\n\t<div class="modal-header">\n\t\t<h4 ng-if="ctrl.isEdition" translate>USER_TITLE_EDIT</h4>\n\t\t<h4 ng-if="!ctrl.isEdition" translate>USER_TITLE_NEW</h4>\n\t</div>\n\t<div class="modal-body">\n\t\t<adama-alert-error></adama-alert-error>\n\t\t<input\n\t\t\ttype="text"\n\t\t\tname="login"\n\t\t\tng-model="ctrl.entity.login"\n\t\t\trequired\n\t\t\tmaxlength="50"\n\t\t\tlazy-control\n\t\t\tlazy-control-label-key="USER_FORM_LOGIN"\n\t\t/>\n\t\t<div ng-messages="form.login.$error" ng-if="form.login.$touched">\n\t\t\t<div ng-message="required" translate>CRUD_FORM_ERROR_REQUIRED</div>\n\t\t\t<div ng-message="maxlength" translate translate-values="{maxlength: 50}">CRUD_FORM_ERROR_MAXLENGTH</div>\n\t\t</div>\n\t\t<input\n\t\t\ttype="text"\n\t\t\tname="firstName"\n\t\t\tng-model="ctrl.entity.firstName"\n\t\t\tmaxlength="50"\n\t\t\trequired\n\t\t\tlazy-control\n\t\t\tlazy-control-label-key="USER_FORM_FIRSTNAME"\n\t\t/>\n\t\t<div ng-messages="form.firstName.$error" ng-if="form.firstName.$touched">\n\t\t\t<div ng-message="required" translate>CRUD_FORM_ERROR_REQUIRED</div>\n\t\t\t<div ng-message="maxlength" translate translate-values="{maxlength: 50}">CRUD_FORM_ERROR_MAXLENGTH</div>\n\t\t</div>\n\t\t<input\n\t\t\ttype="text"\n\t\t\tname="lastName"\n\t\t\tng-model="ctrl.entity.lastName"\n\t\t\tmaxlength="50"\n\t\t\trequired\n\t\t\tlazy-control\n\t\t\tlazy-control-label-key="USER_FORM_LASTNAME"\n\t\t/>\n\t\t<div ng-messages="form.lastName.$error" ng-if="form.lastName.$touched">\n\t\t\t<div ng-message="required" translate>CRUD_FORM_ERROR_REQUIRED</div>\n\t\t\t<div ng-message="maxlength" translate translate-values="{maxlength: 50}">CRUD_FORM_ERROR_MAXLENGTH</div>\n\t\t</div>\n\t\t<input\n\t\t\ttype="email"\n\t\t\tname="email"\n\t\t\tng-model="ctrl.entity.email"\n\t\t\trequired\n\t\t\tmaxlength="100"\n\t\t\tlazy-control\n\t\t\tlazy-control-label-key="USER_FORM_EMAIL"\n\t\t/>\n\t\t<div ng-messages="form.email.$error" ng-if="form.email.$touched">\n\t\t\t<div ng-message="required" translate>CRUD_FORM_ERROR_REQUIRED</div>\n\t\t\t<div ng-message="email" translate>CRUD_FORM_ERROR_EMAIL</div>\n\t\t\t<div ng-message="maxlength" translate translate-values="{maxlength: 100}">CRUD_FORM_ERROR_MAXLENGTH</div>\n\t\t</div>\n\t\t<ds-language data="languages"></ds-language>\n\t\t<select\n\t\t\tname="langKey"\n\t\t\tng-model="ctrl.entity.langKey"\n\t\t\tng-options="language as language for language in languages track by language"\n\t\t\tlazy-control\n\t\t\tlazy-control-label-key="USER_FORM_LANGUAGE"\n\t\t></select>\n\t\t<ds-authorities data="authorities"></ds-authorities>\n\t\t<select\n\t\t\tname="authority"\n\t\t\tng-model="ctrl.entity.authority"\n\t\t\tng-options="authority for authority in authorities"\n\t\t\tlazy-control\n\t\t\tlazy-control-label-key="USER_FORM_AUTHORITY"\n\t\t\trequired\n\t\t></select>\n\t\t<div ng-messages="form.authority.$error" ng-if="form.authority.$touched">\n\t\t\t<div ng-message="required" translate>CRUD_FORM_ERROR_REQUIRED</div>\n\t\t</div>\n\t</div>\n\t<div class="modal-footer">\n\t\t<modal-btn-cancel></modal-btn-cancel>\n\t\t<modal-btn-confirm-edit></modal-btn-confirm-edit>\n\t</div>\n</form>\n');
$templateCache.put('adama-web/user/user-export-xls.html','<div>\n\t<div class="modal-header">\n\t\t<h4 translate>USER_TITLE_EXPORT_XLS</h4>\n\t</div>\n\t<div class="modal-body">\n\t\t<adama-alert-error></adama-alert-error>\n\t\t<span translate>CRUD_EXPORT_XLS_MESSAGE</span>\n\t</div>\n\t<div class="modal-footer">\n\t\t<modal-btn-cancel></modal-btn-cancel>\n\t\t<modal-btn-confirm-export-xls></modal-btn-confirm-export-xls>\n\t</div>\n</div>\n');
$templateCache.put('adama-web/user/user-import-xls.html','<form name="form" novalidate>\n\t<div class="modal-header">\n\t\t<h4 translate>USER_TITLE_IMPORT_XLS</h4>\n\t</div>\n\t<div class="modal-body">\n\t\t<adama-alert-error></adama-alert-error>\n\t\t<span translate>CRUD_IMPORT_XLS_MESSAGE</span>\n\t\t<label\n\t\t\tclass="file-upload--zone file-upload--dropzone"\n\t\t\tng-show="!ctrl.file && !ctrl.loading"\n\t\t\tngf-drop\n\t\t\tng-model="ctrl.file"\n\t\t\tngf-drag-over-class="\'dragover\'"\n\t\t\tngf-multiple="false"\n\t\t\tngf-pattern="\'.xls\'"\n\t\t>\n\t\t\t<span translate>FILEUPLOAD_DROPZONE_LABEL_MASS_IMPORT</span>\n\t\t\t<span class="only-dragover" translate>FILEUPLOAD_DROPZONE_LABEL_DROP</span>\n\t\t\t<input\n\t\t\t\ttype="file"\n\t\t\t\tname="file"\n\t\t\t\tid="fileInput"\n\t\t\t\tng-model="ctrl.file"\n\t\t\t\tngf-select\n\t\t\t\tngf-pattern="\'.xls\'"\n\t\t\t/>\n\t\t</label>\n\t\t<div\n\t\t\tclass="file-upload--zone"\n\t\t\tng-click="ctrl.file = undefined"\n\t\t\tng-show="ctrl.file && !ctrl.loading"\n\t\t>\n\t\t\t<span translate>FILEUPLOAD_RESET</span>\n\t\t</div>\n\t</div>\n\t<div class="modal-footer">\n\t\t<modal-btn-cancel></modal-btn-cancel>\n\t\t<modal-btn-confirm-import-xls></modal-btn-confirm-import-xls>\n\t</div>\n</form>\n');
$templateCache.put('adama-web/user/user-list.html','<div class="content-wrapper">\n\t<section class="content-header crud-content-header">\n\t\t<btn-create></btn-create>\n\t\t<crud-search-field\n\t\t\ttable-params="ctrl.tableParams"\n\t\t></crud-search-field>\n\t\t<h1 translate>USER_TITLE_LIST</h1>\n\t</section>\n\t<section class="content">\n\t\t<div class="box box-primary">\n\t\t\t<div class="box-body">\n\t\t\t\t<div class="table-responsive">\n\t\t\t\t\t<ds-principal-identity data="currentAccount"></ds-principal-identity>\n\t\t\t\t\t<table\n\t\t\t\t\t\tclass="table table-bordered table-striped"\n\t\t\t\t\t\tng-table="ctrl.tableParams"\n\t\t\t\t\t\ttemplate-pagination="adama-web/ark/ngtable/ngtable-pager.html"\n\t\t\t\t\t>\n\t\t\t\t\t\t<tr ng-repeat="user in $data track by user.id">\n\t\t\t\t\t\t\t<!-- <td -->\n\t\t\t\t\t\t\t<!-- \theader="\'adama-web/ark/ngtable/ngtable-checkbox.html\'" -->\n\t\t\t\t\t\t\t<!-- > -->\n\t\t\t\t\t\t\t<!-- \t<input type="checkbox" ng-model="user.isSelected" /> -->\n\t\t\t\t\t\t\t<!-- </td> -->\n\t\t\t\t\t\t\t<td\n\t\t\t\t\t\t\t\tdata-title="\'USER_LIST_LOGIN\' | translate"\n\t\t\t\t\t\t\t\tsortable="\'login\'"\n\t\t\t\t\t\t\t>{{user.login}}</td>\n\t\t\t\t\t\t\t<td\n\t\t\t\t\t\t\t\tdata-title="\'USER_LIST_MAIL\' | translate"\n\t\t\t\t\t\t\t\tsortable="\'email\'"\n\t\t\t\t\t\t\t>{{user.email}}</td>\n\t\t\t\t\t\t\t<td\n\t\t\t\t\t\t\t\tdata-title="\'USER_LIST_LANGUAGE\' | translate"\n\t\t\t\t\t\t\t\tsortable="\'langKey\'"\n\t\t\t\t\t\t   \t>{{user.langKey}}</td>\n\t\t\t\t\t\t\t<td\n\t\t\t\t\t\t\t\tdata-title="\'USER_LIST_AUTHORITY\' | translate"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<span class="label label-info">{{ user.authority }}</span>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td class="text-right">\n\t\t\t\t\t\t\t\t<crud-action-dropdown route-mapping="{id:user.id}"></crud-action-dropdown>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</table>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n</div>\n');
$templateCache.put('adama-web/user/user-view.html','<div>\n\t<div class="modal-header">\n\t\t<h4 translate>USER_TITLE_VIEW</h4>\n\t</div>\n\t<div class="modal-body horizontal-form">\n\t\t<view-attribute label-key="USER_FORM_LOGIN" value="ctrl.entity.login"></view-attribute>\n\t\t<view-attribute label-key="USER_FORM_FIRSTNAME" value="ctrl.entity.firstName"></view-attribute>\n\t\t<view-attribute label-key="USER_FORM_LASTNAME" value="ctrl.entity.lastName"></view-attribute>\n\t\t<view-attribute label-key="USER_FORM_EMAIL" value="ctrl.entity.email"></view-attribute>\n\t\t<view-attribute label-key="USER_FORM_LANGUAGE" value="ctrl.entity.langKey"></view-attribute>\n\t\t<view-attribute label-key="USER_FORM_AUTHORITY" value="ctrl.entity.authority"></view-attribute>\n\t</div>\n\t<div class="modal-footer">\n\t\t<modal-btn-back-to-list></modal-btn-back-to-list>\n\t</div>\n</div>\n');
$templateCache.put('adama-web/account/password/password.html','<div class="content-wrapper">\n\t<section class="content-header">\n\t\t<h1 translate>ACCOUNT_PASSWORD_TITLE</h1>\n\t</section>\n\t<section class="content">\n\t\t<div class="box box-primary">\n\t\t\t<form name="form" novalidate ng-submit="ctrl.changePassword()">\n\t\t\t\t<div class="box-body">\n\t\t\t\t\t<input\n\t\t\t\t\t\ttype="password"\n\t\t\t\t\t\tname="password"\n\t\t\t\t\t\tplaceholder="{{\'ACCOUNT_PASSWORD_NEWPASSWORD_PLACEHOLDER\' | translate}}"\n\t\t\t\t\t\tng-model="ctrl.password"\n\t\t\t\t\t\tminlength=5\n\t\t\t\t\t\tmaxlength=50\n\t\t\t\t\t\trequired\n\t\t\t\t\t\tlazy-control\n\t\t\t\t\t\tlazy-control-label-key="ACCOUNT_PASSWORD_NEWPASSWORD"\n\t\t\t\t\t/>\n\t\t\t\t\t<div ng-messages="form.password.$error" ng-if="form.password.$touched">\n\t\t\t\t\t\t<div ng-message="required" translate>ACCOUNT_PASSWORD_NEWPASSWORD_REQUIRED</div>\n\t\t\t\t\t\t<div ng-message="minlength" translate>ACCOUNT_PASSWORD_NEWPASSWORD_MINLENGTH</div>\n\t\t\t\t\t\t<div ng-message="maxlength" translate>ACCOUNT_PASSWORD_NEWPASSWORD_MAXLENGTH</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<input\n\t\t\t\t\t\ttype="password"\n\t\t\t\t\t\tname="confirmPassword"\n\t\t\t\t\t\tplaceholder="{{\'ACCOUNT_PASSWORD_CONFIRM_NEWPASSWORD_PLACEHOLDER\' | translate}}"\n\t\t\t\t\t\tng-model="ctrl.confirmPassword"\n\t\t\t\t\t\tminlength=5\n\t\t\t\t\t\tmaxlength=50\n\t\t\t\t\t\trequired\n\t\t\t\t\t\tlazy-control\n\t\t\t\t\t\tlazy-control-label-key="ACCOUNT_PASSWORD_CONFIRM_NEWPASSWORD"\n\t\t\t\t\t\tng-pattern="ctrl.password"\n\t\t\t\t\t/>\n\t\t\t\t\t<div ng-messages="form.confirmPassword.$error" ng-if="form.confirmPassword.$touched">\n\t\t\t\t\t\t<div ng-message="required" translate>ACCOUNT_PASSWORD_CONFIRM_NEWPASSWORD_REQUIRED</div>\n\t\t\t\t\t\t<div ng-message="minlength" translate>ACCOUNT_PASSWORD_CONFIRM_NEWPASSWORD_MINLENGTH</div>\n\t\t\t\t\t\t<div ng-message="maxlength" translate>ACCOUNT_PASSWORD_CONFIRM_NEWPASSWORD_MAXLENGTH</div>\n\t\t\t\t\t\t<div ng-message="pattern" translate>ACCOUNT_PASSWORD_CONFIRM_NEWPASSWORD_PATTERN</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="box-footer">\n\t\t\t\t\t<button\n\t\t\t\t\t\ttype="submit"\n\t\t\t\t\t\tclass="btn btn-primary"\n\t\t\t\t\t\tng-disabled="form.$invalid"\n\t\t\t\t\t\ttranslate\n\t\t\t\t\t>ACCOUNT_PASSWORD_SUBMIT</button>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</div>\n\t</section>\n</div>\n');
$templateCache.put('adama-web/account/settings/settings.html','<div class="content-wrapper">\n\t<section class="content-header">\n\t\t<h1 translate>ACCOUNT_SETTINGS_TITLE</h1>\n\t</section>\n\t<section class="content">\n\t\t<div class="box box-primary">\n\t\t\t<form name="form" novalidate ng-submit="ctrl.save()">\n\t\t\t\t<div class="box-body">\n\t\t\t\t\t<input\n\t\t\t\t\t\ttype="text"\n\t\t\t\t\t\tname="firstName"\n\t\t\t\t\t\tplaceholder="{{\'ACCOUNT_SETTINGS_FIRSTNAME_PLACEHOLDER\' | translate}}"\n\t\t\t\t\t\tng-model="ctrl.settingsAccount.firstName"\n\t\t\t\t\t\tminlength=1\n\t\t\t\t\t\tmaxlength=50\n\t\t\t\t\t\trequired\n\t\t\t\t\t\tlazy-control\n\t\t\t\t\t\tlazy-control-label-key="ACCOUNT_SETTINGS_FIRSTNAME"\n\t\t\t\t\t/>\n\t\t\t\t\t<div ng-messages="form.firstName.$error" ng-if="form.firstName.$touched">\n\t\t\t\t\t\t<div ng-message="required" translate>ACCOUNT_SETTINGS_FIRSTNAME_REQUIRED</div>\n\t\t\t\t\t\t<div ng-message="maxlength" translate>ACCOUNT_SETTINGS_FIRSTNAME_MAXLENGTH</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<input\n\t\t\t\t\t\ttype="text"\n\t\t\t\t\t\tname="lastName"\n\t\t\t\t\t\tplaceholder="{{\'ACCOUNT_SETTINGS_LASTNAME_PLACEHOLDER\' | translate}}"\n\t\t\t\t\t\tng-model="ctrl.settingsAccount.lastName"\n\t\t\t\t\t\tminlength=1\n\t\t\t\t\t\tmaxlength=50\n\t\t\t\t\t\trequired\n\t\t\t\t\t\tlazy-control\n\t\t\t\t\t\tlazy-control-label-key="ACCOUNT_SETTINGS_LASTNAME"\n\t\t\t\t\t/>\n\t\t\t\t\t<div ng-messages="form.lastName.$error" ng-if="form.lastName.$touched">\n\t\t\t\t\t\t<div ng-message="required" translate>ACCOUNT_SETTINGS_FIRSTNAME_REQUIRED</div>\n\t\t\t\t\t\t<div ng-message="maxlength" translate>ACCOUNT_SETTINGS_FIRSTNAME_MAXLENGTH</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<input\n\t\t\t\t\t\ttype="email"\n\t\t\t\t\t\tname="email"\n\t\t\t\t\t\tplaceholder="{{\'ACCOUNT_SETTINGS_EMAIL_PLACEHOLDER\' | translate}}"\n\t\t\t\t\t\tng-model="ctrl.settingsAccount.email"\n\t\t\t\t\t\tminlength=5\n\t\t\t\t\t\tmaxlength=100\n\t\t\t\t\t\trequired\n\t\t\t\t\t\tlazy-control\n\t\t\t\t\t\tlazy-control-label-key="ACCOUNT_SETTINGS_EMAIL"\n\t\t\t\t\t/>\n\t\t\t\t\t<div ng-messages="form.email.$error" ng-if="form.email.$touched">\n\t\t\t\t\t\t<div ng-message="required" translate>ACCOUNT_SETTINGS_EMAIL_REQUIRED</div>\n\t\t\t\t\t\t<div ng-message="email" translate>ACCOUNT_SETTINGS_EMAIL_EMAIL</div>\n\t\t\t\t\t\t<div ng-message="maxlength" translate>ACCOUNT_SETTINGS_EMAIL_MAXLENGTH</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<ds-language data="languages"></ds-language>\n\t\t\t\t\t<select\n\t\t\t\t\t\tname="langKey"\n\t\t\t\t\t\tng-model="ctrl.settingsAccount.langKey"\n\t\t\t\t\t\tng-options="code as code for code in languages"\n\t\t\t\t\t\tlazy-control\n\t\t\t\t\t\tlazy-control-label-key="ACCOUNT_SETTINGS_LANGUAGE"\n\t\t\t\t\t></select>\n\t\t\t\t</div>\n\t\t\t\t<div class="box-footer">\n\t\t\t\t\t<button\n\t\t\t\t\t\ttype="submit"\n\t\t\t\t\t\tclass="btn btn-primary"\n\t\t\t\t\t\tng-disabled="form.$invalid"\n\t\t\t\t\t\ttranslate\n\t\t\t\t\t>ACCOUNT_SETTINGS_SUBMIT</button>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</div>\n\t</section>\n</div>\n');
$templateCache.put('adama-web/ark/ark-footer/ark-footer.html','<footer class="main-footer">\n\t<div class="pull-right">\n\t\t<span class="hidden-xs">Version 1.0001</span>\n\t\t<language-selector></language-selector>\n\t</div>\n\t<strong>\n\t\tCopyright &copy;\n\t\t<span>2016</span>\n\t\t<a href="http://www.adama-development.com/" target="_blank">Adama Development</a>\n\t</strong>\n</footer>\n<layout-fix></layout-fix>\n\n');
$templateCache.put('adama-web/ark/ark-header/ark-header.html','<header class="main-header">\n\t<a class="logo" ui-sref="app.main">\n\t\t<span class="logo-mini">\n\t\t\t<b translate>APP_NAME_SHORT</b>\n\t\t</span>\n\t\t<span class="logo-lg">\n\t\t\t<b translate>APP_NAME</b>\n\t\t</span>\n\t</a>\n\t<nav class="navbar navbar-static-top" role="navigation">\n\t\t<!-- Sidebar toggle button-->\n\t\t<a class="noajax sidebar-toggle" data-toggle="offcanvas" role="button">\n\t\t\t<span class="sr-only" translate>TOGGLE_NAVIGATION</span>\n\t\t</a>\n\t\t<user-info></user-info>\n\t</nav>\n</header>\n<layout-fix></layout-fix>\n');
$templateCache.put('adama-web/ark/language-selector/language-selector.html','<div class="dropdown pull-right dropup">\n\t<button type="button" class="btn btn-link btn-xs dropdown-toggle" data-toggle="dropdown" aria-expanded="true">\n\t\t<i class="famfamfam-flags" ng-class="$ctrl.currentLanguage"></i>\n\t</button>\n\t<ul class="dropdown-menu">\n\t\t<li ng-repeat="language in $ctrl.languages">\n\t\t\t<a ng-click="$ctrl.changeLanguage(language.code)">\n\t\t\t\t<span class="famfamfam-flags" ng-class="language.cssCLass"></span>\n\t\t\t\t<span translate>{{\xA0language.labelKey }}</span></a>\n\t\t\t</a>\n\t\t</li>\n\t</ul>\n</div>\n');
$templateCache.put('adama-web/ark/menu/main-navigation.html','<ul class="sidebar-menu">\n\t<li\n\t\tng-repeat="item in $ctrl.menuItems | orderBy:\'rank\'"\n\t\tng-class="{\'header\':item.divider, \'treeview\': !item.url && !item.divider}"\n\t>\n\t\t<span ng-if="item.divider">{{ item.label }}</span>\n\t\t<a ng-href="{{::item.url}}" ng-if="item.url">\n\t\t\t<i ng-class="item.iconClass" ng-if="item.iconClass"></i>\n\t\t\t<span>{{ item.label }}</span>\n\t\t\t<span\n\t\t\t\tclass="label pull-right"\n\t\t\t\tng-if="item.badge && item.badge.value"\n\t\t\t\tng-class="item.badge.color"\n\t\t\t>{{ item.badge.value }}</span>\n\t\t</a>\n\t\t<a ng-if="!item.url && !item.divider">\n\t\t\t<i ng-class="item.iconClass" ng-if="item.iconClass"></i>\n\t\t\t<span>{{ item.label }}</span>\n\t\t\t<i class="fa fa-angle-left pull-right"></i>\n\t\t</a>\n\t\t<ul class="treeview-menu" ng-if="!item.url && !item.divider">\n\t\t\t<li ng-repeat="subItem in item.subItems | orderBy:\'rank\'">\n\t\t\t\t<a\n\t\t\t\t\tng-href="{{::subItem.url}}"\n\t\t\t\t>\n\t\t\t\t\t{{ subItem.label }}\n\t\t\t\t\t<span\n\t\t\t\t\t\tclass="label pull-right"\n\t\t\t\t\t\tng-if="subItem.badge && subItem.badge.value"\n\t\t\t\t\t\tng-class="subItem.badge.color"\n\t\t\t\t\t>{{ subItem.badge.value }}</span>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t</ul>\n\t</li>\n</ul>\n<layout-fix></layout-fix>\n');
$templateCache.put('adama-web/ark/ngtable/ngtable-checkbox.html','<select-all\n\tentity-list="$data"\n></select-all>\n');
$templateCache.put('adama-web/ark/ngtable/ngtable-pager.html','<div class="angular-table-pager">\n\t<div class="col-sm-4">\n\t\t<div ng-if="params.settings().counts.length" class="ng-table-counts btn-group">\n\t\t\t<button ng-repeat="count in params.settings().counts" type="button" ng-class="{\'active\':params.count()==count}" ng-click="params.count(count)" class="btn btn-default btn-sm">\n\t\t\t\t<span ng-bind="count"></span>\n\t\t\t</button>\n\t\t</div>\n\t</div>\n\t<div \n\t\tclass="col-sm-4"\n\t\ttranslate="PAGER_RESULT"\n\t\ttranslate-values="{\n\t\t\ttotal: params.total(),\n\t\t\tfirstItemIdx: (params.page() - 1) * params.count() + 1,\n\t\t\tlastItemIdx: params.page() * params.count()\n\t\t}"\n\t></div>\n\t<div class="col-sm-4">\n\t\t<ul class="pagination pagination-sm" ng-show="pages">\n\t\t\t<li\n\t\t\t\tng-repeat="page in pages"\n\t\t\t\tng-class="{\'active\': page.current}"\n\t\t\t\tng-switch="page.type"\n\t\t\t>\n\t\t\t\t<a ng-switch-when="prev" ng-click="params.page(page.number)" ng-if="page.active">\n\t\t\t\t\t&lt;\n\t\t\t\t</a>\n\t\t\t\t<a ng-switch-when="next" ng-click="params.page(page.number)" ng-if="page.active">\n\t\t\t\t\t&gt;\n\t\t\t\t</a>\n\t\t\t\t<a\n\t\t\t\t\tng-click="params.page(page.number)"\n\t\t\t\t\tng-switch-default\n\t\t\t\t>{{ page.number }}</a>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n</div>\n');
$templateCache.put('adama-web/ark/select-all/select-all.html','<i\n\tclass="glyphicon"\n\tng-class="{true:\'glyphicon-unchecked\', false:\'glyphicon-check\'}[$ctrl.isAllChecked]"\n\tng-click="$ctrl.checkAll()"\n></i>\n');
$templateCache.put('adama-web/ark/user-info/user-info.html','<div class="navbar-custom-menu">\n\t<ul class="nav navbar-nav">\n\t\t<li class="dropdown user user-menu">\n\t\t\t<ds-principal-identity data="$ctrl.account"></ds-principal-identity>\n\t\t\t<a class="dropdown-toggle noajax" data-toggle="dropdown" aria-expanded="false">\n\t\t\t\t<i class="fa fa-user"></i>\n\t\t\t\t<span class="hidden-xs">\n\t\t\t\t\t<span>\n\t\t\t\t\t\t{{ $ctrl.account.firstName }}\n\t\t\t\t\t\t{{ $ctrl.account.lastName }}\n\t\t\t\t\t</span>\n\t\t\t\t</span>\n\t\t\t</a>\n\t\t\t<ul class="dropdown-menu">\n\t\t\t\t<li class="user-header">\n\t\t\t\t\t<i class="fa fa-user"></i>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t{{ $ctrl.account.firstName }}\n\t\t\t\t\t\t\t{{ $ctrl.account.lastName }}\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<small>\n\t\t\t\t\t\t\t{{\xA0$ctrl.account.authority }}\n\t\t\t\t\t\t</small>\n\t\t\t\t\t</p>\n\t\t\t\t</li>\n\t\t\t\t<li class="user-footer">\n\t\t\t\t\t<div class="pull-left">\n\t\t\t\t\t\t<a ui-sref="app.personal.settings" class="btn btn-default btn-flat">\n\t\t\t\t\t\t\t<i class="glyphicon glyphicon-user"></i>\n\t\t\t\t\t\t\t<span class="sr-only" translate>USERINFO_PROFILE</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="pull-left">\n\t\t\t\t\t\t<a ui-sref="app.personal.password" class="btn btn-default btn-flat">\n\t\t\t\t\t\t\t<i class="glyphicon glyphicon-lock"></i>\n\t\t\t\t\t\t\t<span class="sr-only" translate>USERINFO_PASSWORD</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="pull-right">\n\t\t\t\t\t\t<a class="btn btn-default btn-flat" ng-click="$ctrl.signout()">\n\t\t\t\t\t\t\t<i class="glyphicon glyphicon-log-out"></i>\n\t\t\t\t\t\t\t<span class="sr-only" translate>USERINFO_SIGNOUT</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</li>\n\t</ul>\n</div>\n');
$templateCache.put('adama-web/ark/view-attribute/view-attribute.html','<div class="row">\n\t<div class="col-sm-4" translate>{{ $ctrl.labelKey }}</div>\n\t<div class="col-sm-8" ng-if="$ctrl.valueKey">{{ $ctrl.value }}</div>\n\t<div class="col-sm-8" ng-if="!$ctrl.valueKey" ng-transclude></div>\n</div>\n');}]);