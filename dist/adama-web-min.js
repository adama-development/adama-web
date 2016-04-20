"use strict";angular.module("adama-web",["ngSanitize","ngMessages","ui.router","ui.bootstrap","pascalprecht.translate","ngCookies","ngResource","LocalStorageModule","ngTable","ngFileSaver","ngFileUpload","angular-loading-bar"]),angular.module("adama-web").config(["$urlRouterProvider",function(e){e.otherwise("/app/")}]),angular.module("adama-web").run(["$rootScope",function(e){e.additionalBodyClass="sidebar-mini",e.$on("$stateChangeSuccess",function(t,a){a&&a.name&&0===a.name.indexOf("auth")?e.additionalBodyClass="login-page":e.additionalBodyClass="sidebar-mini"})}]),angular.module("adama-web").run(["$rootScope","$filter",function(e,t){var a=t("translate");e.$on("$stateChangeSuccess",function(t,r){r&&r.data&&r.data.pageTitle&&(e.pageTitle=a(r.data.pageTitle))})}]),angular.module("adama-web").config(["$translateProvider",function(e){e.useSanitizeValueStrategy("escapeParameters"),e.useLocalStorage(),e.registerAvailableLanguageKeys(["en","fr"],{"en_*":"en","fr_*":"fr"}),e.determinePreferredLanguage()}]),angular.module("adama-web").config(["$stateProvider",function(e){e.state("app",{"abstract":!0,url:"/app",template:'<div class="wrapper">	<ark-header></ark-header>	<aside class="main-sidebar">		<section class="sidebar">			<main-navigation></main-navigation>		</section>	</aside>	<jh-alert></jh-alert>	<ui-view></ui-view>	<ark-footer></ark-footer>	<layout-fix add-event="true"></layout-fix></div>',resolve:{authorize:["Auth",function(e){return e.authorize()}]}})}]),angular.module("adama-web").run(["ngTableDefaults",function(e){e.settings=angular.extend({},e.settings,{counts:[10,20,50]}),e.params=angular.extend({},e.params,{page:1,count:20})}]),angular.module("adama-web").config(["$translateProvider",function(e){e.translations("fr",{MENU_CATEGORY_USERS:"Utilisateurs",PAGER_RESULT:"{{ firstItemIdx }}-{{ lastItemIdx | min:total }} sur {{ total }} entrées",FLAG_EN:"Anglais",FLAG_CN:"Chinois",FLAG_FR:"Français",FILEUPLOAD_DROPZONE_LABEL:"Déposez un fichier XLS pour le téléverser ou cliquez sur la zone pour sélectionner un fichier XLS.",FILEUPLOAD_DROPZONE_LABEL_DROP:"Vous pouvez déposer le fichier.",FILEUPLOAD_RESET:"Retirer le fichier sélectionné et faire une nouvelle sélection."}),e.translations("en",{MENU_CATEGORY_USERS:"Users",PAGER_RESULT:"{{ firstItemIdx }}-{{ lastItemIdx | min:total }} on {{ total }} entries",FLAG_EN:"English",FLAG_CN:"Chinese",FLAG_FR:"French",FILEUPLOAD_DROPZONE_LABEL:"Drop a XLS file on this area to upload it or click the area to select a XLS file.",FILEUPLOAD_DROPZONE_LABEL_DROP:"You can now drop the file",FILEUPLOAD_RESET:"Remove selected file and start over."})}]),angular.module("adama-web").config(["$stateProvider",function(e){e.state("app.personal",{"abstract":!0,url:"/personal",template:"<ui-view></ui-view>"})}]),angular.module("adama-web").controller("AccessDeniedCtrl",function(){}),angular.module("adama-web").config(["$stateProvider",function(e){e.state("auth",{"abstract":!0,url:"/auth",template:"<ui-view></ui-view>"}),e.state("auth.signin",{url:"/",templateUrl:"adama-web/auth/signin.html",controller:"SigninCtrl",controllerAs:"ctrl",data:{pageTitle:"SIGNIN",authorities:[]}}),e.state("auth.recoverPassword",{url:"/recoverPassword",templateUrl:"adama-web/auth/recoverPassword.html",controller:"RecoverPasswordCtrl",controllerAs:"ctrl",data:{pageTitle:"RECOVER",authorities:[]}}),e.state("auth.accessDenied",{url:"/accessDenied",templateUrl:"adama-web/auth/accessDenied.html",controller:"AccessDeniedCtrl",controllerAs:"ctrl",data:{pageTitle:"ACCESS_DENIED",authorities:[]}})}]),angular.module("adama-web").config(["$translateProvider",function(e){e.translations("fr",{SIGNIN:"Identification",SIGNIN_INTRO:"Identifiez-vous pour démarrer votre session",SIGNIN_FORGET_PASSWORD:"J'ai oublié mon mot de passe ...",SIGNIN_USERNAME:"Identifiant",SIGNIN_USERNAME_REQUIRED:"L'identifiant est obligatoire",SIGNIN_PASSWORD:"Mot de passe",SIGNIN_PASSWORD_REQUIRED:"Le mot de passe est obligatoire",SIGNIN_SUBMIT:"Démarrer la session",SIGNIN_ERROR:"Erreur d'authentification : identifiant ou mot de passe incorrect.",RECOVER:"Récupération de mot de passe",RECOVER_INTRO:"Saisissez votre email pour récupérer votre mot de passe",RECOVER_MAIL:"Email",RECOVER_MAIL_REQUIRED:"L'email est obligatoire",RECOVER_MAIL_EMAIL:"L'email n'est pas au bon format",RECOVER_SUBMIT:"Récupérer mon mot de passe",RECOVER_BACK_TO_LOGIN:"Retour à l'identificaition",RECOVER_SUCCESS:"Consultez votre email pour connaître comment réinitialiser votre mot de passe.",RECOVER_ERROR:"Erreur lors de la récupération du mot de passe.",RECOVER_ERROR_EMAIL_NOT_EXIST:"L'email n'existe pas",ACCESS_DENIED:"Accès interdit",ACCESS_DENIED_INTRO:"Vous n'avez pas suffisamment de droits d'accéder à cette page."}),e.translations("en",{SIGNIN:"Signin",SIGNIN_INTRO:"Sign in to start your session",SIGNIN_FORGET_PASSWORD:"I forgot my password ...",SIGNIN_USERNAME:"Username",SIGNIN_USERNAME_REQUIRED:"Username is required",SIGNIN_PASSWORD:"Password",SIGNIN_PASSWORD_REQUIRED:"Password is required",SIGNIN_SUBMIT:"Start session",SIGNIN_ERROR:"Authentication error : Username or password are incorrect.",RECOVER:"Recover password",RECOVER_INTRO:"Set your email to recover your password",RECOVER_MAIL:"Email",RECOVER_MAIL_REQUIRED:"Email is required",RECOVER_MAIL_EMAIL:"Email does not respect the right format",RECOVER_SUBMIT:"Retrieve my password",RECOVER_BACK_TO_LOGIN:"Back to signin",RECOVER_SUCCESS:"Check your e-mails for details on how to reset your password.",RECOVER_ERROR:"Recovering error.",RECOVER_ERROR_EMAIL_NOT_EXIST:"E-Mail address isn't registered! Please check and try again",ACCESS_DENIED:"Access denied",ACCESS_DENIED_INTRO:"You do not have enough privileges to access this page."})}]),angular.module("adama-web").controller("RecoverPasswordCtrl",["Auth",function(e){var t=this;t.recover=function(a){t.recoverSuccess=!1,t.recoverError=!1,t.errorEmailNotExists=!1,t.loading=!0,e.resetPasswordInit(a).then(function(){t.recoverSuccess=!0})["catch"](function(e){400===e.status&&"e-mail address not registered"===e.data?t.errorEmailNotExists=!0:t.recoverError=!0})["finally"](function(){t.loading=!1})}}]),angular.module("adama-web").controller("SigninCtrl",["$rootScope","$state","Auth",function(e,t,a){var r=this;r.signin=function(n,o){r.authenticationError=!1,a.login({username:n,password:o}).then(function(){"auth.signin"===e.previousStateName?t.go("app.main"):e.back()})["catch"](function(){r.authenticationError=!0})}}]),angular.module("adama-web").config(["$translateProvider",function(e){e.translations("fr",{CRUD_BACK_TO_LIST:"Retour à la liste",CRUD_CANCEL:"Annuler",CRUD_CONFIRM_DELETE:"Confirmer la suppression",CRUD_CONFIRM_EDIT:"Editer",CRUD_CONFIRM_EXPORT:"Confirmer l'export",CRUD_CONFIRM_IMPORT:"Confirmer l'import",CRUD_CONFIRM_SAVE:"Créer",CRUD_DELETE_MESSAGE:"Etes-vous certain de vouloir supprimer ?",CRUD_DELETE_SUCCESS:"Suppression avec succès.",CRUD_DELETE_ERROR:"Erreur, impossible de supprimer.",CRUD_EXPORT_XLS_MESSAGE:"Vous vous apprétez à exporter toutes les données dans une feuille de calcul Excel (XLS).",CRUD_EXPORT_XLS_SUCCESS:"Exportation avec succès.",CRUD_EXPORT_XLS_ERROR:"Erreur, impossible d'exporter.",CRUD_IMPORT_XLS_MESSAGE:"Sélectionnez un fichier Excel puis validez pour un import massif de données.",CRUD_IMPORT_XLS_SUCCESS:"Importation avec succès.",CRUD_IMPORT_XLS_ERROR:"Erreur, impossible d'importer.",CRUD_NEW:"Nouveau",CRUD_MASS_IMPORT:"Import massif",CRUD_MASS_EXPORT:"Export massif",CRUD_EDIT_SUCCESS:"Enregistrement avec succès.",CRUD_NEW_SUCCESS:"Création avec succès.",CRUD_SAVE_ERROR:"Erreur, impossible de sauvegarder.",CRUD_FORM_ERROR_REQUIRED:"Le champs est obligatoire.",CRUD_FORM_ERROR_MAXLENGTH:"Le champs ne doit pas dépasser {{ maxlength }} caractères.",CRUD_FORM_ERROR_EMAIL:"Le format est invalide.",CRUD_FORM_SEARCH:"Recherche",CRUD_FORM_SEARCH_SUBMIT:"Rechercher",CRUD_ACTION_VIEW:"Détails",CRUD_ACTION_EDIT:"Editer",CRUD_ACTION_DELETE:"Supprimer"}),e.translations("en",{CRUD_BACK_TO_LIST:"Back to list",CRUD_CANCEL:"Cancel",CRUD_CONFIRM_DELETE:"Confirm delete",CRUD_CONFIRM_EDIT:"Edit",CRUD_CONFIRM_EXPORT:"Confirm export",CRUD_CONFIRM_IMPORT:"Confirm import",CRUD_CONFIRM_SAVE:"Save",CRUD_DELETE_MESSAGE:"Are you sure you want to delete ?",CRUD_DELETE_SUCCESS:"Delete successfull.",CRUD_DELETE_ERROR:"Error, impossible to delete.",CRUD_EXPORT_XLS_MESSAGE:"You're about to export all the data into an Excel spreadsheet (XLS).",CRUD_EXPORT_XLS_SUCCESS:"Export successfull.",CRUD_EXPORT_XLS_ERROR:"Error, impossible to export.",CRUD_IMPORT_XLS_MESSAGE:"Select an Excel file and submit in order to mass import data.",CRUD_IMPORT_XLS_SUCCESS:"Import successfull.",CRUD_IMPORT_XLS_ERROR:"Error, impossible to import.",CRUD_NEW:"New",CRUD_MASS_IMPORT:"Mass import",CRUD_MASS_EXPORT:"Mass export",CRUD_EDIT_SUCCESS:"Save successfull.",CRUD_NEW_SUCCESS:"Creation successful.",CRUD_SAVE_ERROR:"Error, impossible to save.",CRUD_FORM_ERROR_REQUIRED:"This field is required.",CRUD_FORM_ERROR_MAXLENGTH:"This field cannot be longer than {{ maxlength }} characters.",CRUD_FORM_ERROR_EMAIL:"Format is invalid.",CRUD_FORM_SEARCH:"Search",CRUD_FORM_SEARCH_SUBMIT:"Search",CRUD_ACTION_VIEW:"View details",CRUD_ACTION_EDIT:"Edit",CRUD_ACTION_DELETE:"Delete"})}]),angular.module("adama-web").component("btnCreate",{templateUrl:"adama-web/crud/btn-create.html",transclude:!0}),angular.module("adama-web").component("crudActionDropdown",{bindings:{routeMapping:"<"},templateUrl:"adama-web/crud/crud-action-dropdown.html"}),angular.module("adama-web").controller("CrudDeleteCtrl",["$scope","entity","AlertService",function(e,t,a){var r=this;r.dismiss=function(){e.$dismiss()},r.confirmDelete=function(){t.$delete().then(function(){a.success("CRUD_DELETE_SUCCESS"),e.$close()})["catch"](function(){a.error("CRUD_DELETE_ERROR")})}}]),angular.module("adama-web").controller("CrudEditCtrl",["$scope","entity","EntityGenericResource","AlertService",function(e,t,a,r){var n=this;n.isEdition=!!t,n.entity=t,n.dismiss=function(){e.$dismiss()},n.save=function(){var t;t=n.isEdition?a.update:a.save,t(n.entity).$promise.then(function(t){n.isEdition?r.success("CRUD_EDIT_SUCCESS"):r.success("CRUD_NEW_SUCCESS"),e.$close(t)})}}]),angular.module("adama-web").controller("CrudExportXlsCtrl",["$scope","AlertService","EntityGenericResource",function(e,t,a){var r=this;r.dismiss=function(){e.$dismiss()},r.loading=!1,r.confirmExportXls=function(){r.loading=!0,a.massExportXls().$promise.then(function(a){t.success("CRUD_EXPORT_XLS_SUCCESS"),e.$close(a)})["catch"](function(){t.error("CRUD_EXPORT_XLS_ERROR")})["finally"](function(){r.loading=!1})}}]),angular.module("adama-web").controller("CrudImportXlsCtrl",["$scope","AlertService","EntityGenericResource",function(e,t,a){var r=this;r.dismiss=function(){e.$dismiss()},r.loading=!1,r.confirmImportXls=function(){var n=r.file;r.loading=!0,a.massImportXls({file:n}).$promise.then(function(){t.success("CRUD_IMPORT_XLS_SUCCESS"),e.$close()},function(){t.error("CRUD_IMPORT_XLS_ERROR")})["finally"](function(){r.loading=!1})}}]),angular.module("adama-web").controller("CrudListCtrl",["EntityGenericResource","NgTableParams",function(e,t){var a=this;a.tableParams=new t({},{total:0,getData:function(t,a){var r=a.sorting(),n=[];if(!angular.equals({},r))for(var o in r)r.hasOwnProperty(o)&&n.push(o+","+r[o]);e.query({page:a.page()-1,size:a.count(),sort:n,search:a.filter().$}).$promise.then(function(e){a.total(e.$metadata.totalItems),t.resolve(e)})}})}]),angular.module("adama-web").component("crudSearchField",{templateUrl:"adama-web/crud/crud-search-field.html",bindings:{tableParams:"<"},controller:function(){var e=this;e.search=function(){e.tableParams.filter({$:e.searchValue}),e.tableParams.page(1),e.tableParams.reload()}}}),angular.module("adama-web").controller("CrudViewCtrl",["$scope","entity",function(e,t){var a=this;a.entity=t,a.dismiss=function(){e.$dismiss()}}]),angular.module("adama-web").directive("modalBtnBackToList",function(){return{templateUrl:"adama-web/crud/modal-btn-back-to-list.html",restrict:"E"}}),angular.module("adama-web").directive("modalBtnCancel",function(){return{templateUrl:"adama-web/crud/modal-btn-cancel.html",restrict:"E"}}),angular.module("adama-web").directive("modalBtnConfirmDelete",function(){return{templateUrl:"adama-web/crud/modal-btn-confirm-delete.html",restrict:"E"}}),angular.module("adama-web").directive("modalBtnConfirmEdit",function(){return{templateUrl:"adama-web/crud/modal-btn-confirm-edit.html",restrict:"E"}}),angular.module("adama-web").directive("modalBtnConfirmExportXls",function(){return{templateUrl:"adama-web/crud/modal-btn-confirm-export-xls.html",restrict:"E"}}),angular.module("adama-web").directive("modalBtnConfirmImportXls",function(){return{templateUrl:"adama-web/crud/modal-btn-confirm-import-xls.html",restrict:"E"}}),angular.module("adama-web").directive("dsAuthorities",["$parse",function(e){return{scope:!1,link:function(t,a,r){var n=["ROLE_ADMIN","ROLE_USER","ROLE_MANAGER","ROLE_WORKSHOP","ROLE_CUTTER","ROLE_SHIPPING","ROLE_OFFICE","ROLE_PRESTASHOP"];e(r.data).assign(t,n)}}}]),angular.module("adama-web").directive("dsLanguage",["$parse","language",function(e,t){return{scope:!1,link:function(a,r,n){t.getAll().then(function(t){e(n.data).assign(a,t)})}}}]),angular.module("adama-web").directive("dsPrincipalIdentity",["$parse","Principal",function(e,t){return{scope:!1,link:function(a,r,n){t.identity().then(function(t){e(n.data).assign(a,t)})}}}]),angular.module("adama-web").directive("layoutFix",["$rootScope",function(e){return{scope:{addEvent:"="},restrict:"E",link:function(t){t.addEvent&&e.$on("$viewContentLoaded",function(){$.AdminLTE.layout.fix()}),$.AdminLTE.layout.fix()}}}]),angular.module("adama-web").directive("lazyControl",["$rootScope","$filter",function(e,t){var a=t("translate");return{link:function(t,r,n){var o,i,s,u,l=!1;"checkbox"===n.type?(r.wrap('<div class="checkbox"><label></label></div>'),r.after("<span></span>"),u=r.next().eq(0)):(o=n.ngModel.replace(/\./g,"_"),i=' for="'+o+'"',s=n.labelScreenOnly||!1,s&&(i+=' class="sr-only"'),n.placeholder&&(l=!0),r.attr("id",o),r.addClass("form-control"),r.wrap('<div class="form-group"></div>'),r.before("<label"+i+"></label>"),u=r.prev().eq(0));var c=function(){var e=a(n.lazyControlLabelKey);u.html(e),l||r.attr("placeholder",e)};c(),e.$on("$translateChangeSuccess",function(){c()})}}}]),angular.module("adama-web").filter("min",function(){return Math.min}),angular.module("adama-web").run(["$rootScope","$state","Principal","Auth",function(e,t,a,r){e.$on("$stateChangeStart",function(t,n,o){e.toState=n,e.toStateParams=o,a.isIdentityResolved()&&r.authorize()}),e.$on("$stateChangeSuccess",function(t,a,r,n,o){"auth.signin"!==a.name&&e.previousStateName&&(e.previousStateName=n.name,e.previousStateParams=o)}),e.back=function(){null===t.get(e.previousStateName)?t.go("app.main"):t.go(e.previousStateName,e.previousStateParams)}}]),angular.module("adama-web").config(["$httpProvider",function(e){e.interceptors.push("errorHandlerInterceptor"),e.interceptors.push("authExpiredInterceptor"),e.interceptors.push("authInterceptor"),e.interceptors.push("notificationInterceptor")}]),angular.module("adama-web").constant("jHipsterConstant",{apiBase:"http://localhost:13337/",appModule:"mySuperApp"}),angular.module("adama-web").factory("jHipsterResourceConfig",["ParseLinks","pdfService",function(e,t){return{query:{method:"GET",isArray:!0,transformResponse:function(t,a,r){return t=angular.fromJson(t),200===r&&(t.$metadata={links:e.parse(a("link")),totalItems:a("X-Total-Count")}),t},interceptor:{response:function(e){return e.resource.$metadata=e.data.$metadata,e.resource}}},get:{method:"GET"},save:{method:"POST"},update:{method:"PUT"},"delete":{method:"DELETE",params:{id:"@id"}},massExportXls:{method:"GET",responseType:"arraybuffer",headers:{Accept:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"},transformResponse:t.transformResponseToPdf},massImportXls:{method:"POST",params:{method:"import-xls"},headers:{"Content-Type":void 0},transformRequest:function(e){var t=new window.FormData,a=e.file;return t.append("file",a,a.name),t}}}}]),angular.module("adama-web").factory("User",["$resource","jHipsterConstant","jHipsterResourceConfig",function(e,t,a){var r=angular.extend({},a,{"delete":{method:"DELETE",params:{login:"@login"}}});return e(t.apiBase+"api/users/:login",{},r)}]),angular.module("adama-web").provider("language",function(){var e=["en","fr"],t=[{code:"en",labelKey:"FLAG_EN",cssCLass:"us"},{code:"fr",labelKey:"FLAG_FR",cssCLass:"fr"}];this.setLanguages=function(t){e=t},this.setSelectorData=function(e){t=e},this.$get=["$q","$http","$translate",function(a,r,n){var o={};return o.getCurrent=function(){var e=n.storage().get("NG_TRANSLATE_LANG_KEY");return angular.isUndefined(e)&&(e="en"),a.when(e)},o.getAll=function(){return a.when(e)},o.getSelectorData=function(){return a.when(t)},o}]}),angular.module("adama-web").factory("pdfService",["FileSaver",function(e){var t={};return t.transformResponseToPdf=function(t,a,r){if(200===r){var n,o=new Blob([t],{type:"application/pdf"}),i=a("Content-Disposition");i&&(n=i.substring("attachment;filename = ".length)),n||(n="file.pdf"),e.saveAs(o,n)}},t}]),angular.module("adama-web").config(["$stateProvider",function(e){e.state("app.user",{url:"/users",templateUrl:"adama-web/user/user-list.html",controller:"CrudListCtrl",controllerAs:"ctrl",resolve:{EntityGenericResource:["User",function(e){return e}]},data:{pageTitle:"USER_TITLE_LIST",authorities:["ROLE_MANAGER","ROLE_ADMIN"]}});var t=function(e,t,a,r,n){var o;a&&(o=["User",function(e){return e.get({login:a.login}).$promise}]),t.open({templateUrl:"adama-web/user/"+n,resolve:{entity:o,EntityGenericResource:["User",function(e){return e}]},controller:r+" as ctrl"}).result.then(function(){e.go("^",{},{reload:!0})})["catch"](function(){e.go("^")})};e.state("app.user.edit",{url:"/edit/:login",onEnter:["$state","$uibModal","$stateParams",function(e,a,r){t(e,a,r,"CrudEditCtrl","user-edit.html")}],data:{pageTitle:"USER_TITLE_EDIT",authorities:["ROLE_MANAGER","ROLE_ADMIN"]}}),e.state("app.user.create",{url:"/new",onEnter:["$state","$uibModal",function(e,a){t(e,a,void 0,"CrudEditCtrl","user-edit.html")}],data:{pageTitle:"USER_TITLE_NEW",authorities:["ROLE_MANAGER","ROLE_ADMIN"]}}),e.state("app.user.view",{url:"/view/:login",onEnter:["$state","$uibModal","$stateParams",function(e,a,r){t(e,a,r,"CrudViewCtrl","user-view.html")}],data:{pageTitle:"USER_TITLE_VIEW",authorities:["ROLE_MANAGER","ROLE_ADMIN"]}}),e.state("app.user.delete",{url:"/delete/:login",onEnter:["$state","$uibModal","$stateParams",function(e,a,r){t(e,a,r,"CrudDeleteCtrl","user-delete.html")}],data:{pageTitle:"USER_TITLE_DELETE",authorities:["ROLE_MANAGER","ROLE_ADMIN"]}}),e.state("app.user.importXls",{url:"/import-xls",onEnter:["$state","$uibModal",function(e,a){t(e,a,void 0,"CrudImportXlsCtrl","user-import-xls.html")}],data:{pageTitle:"USER_TITLE_IMPORT_XLS",authorities:["ROLE_MANAGER","ROLE_ADMIN"]}}),e.state("app.user.exportXls",{url:"/export-xls",onEnter:["$state","$uibModal",function(e,a){t(e,a,void 0,"CrudExportXlsCtrl","user-export-xls.html")}],data:{pageTitle:"USER_TITLE_EXPORT_XLS",authorities:["ROLE_MANAGER","ROLE_ADMIN"]}})}]),angular.module("adama-web").config(["$translateProvider",function(e){e.translations("fr",{error:{userexists:"Login déjà utilisé !",emailexists:"E-mail déjà utilisé !"},USER_MENU:"Utilisateurs",USER_TITLE_DELETE:"Suppression d'un utilisateur",USER_TITLE_VIEW:"Détails d'un utilisateur",USER_TITLE_LIST:"Liste des utilisateurs",USER_TITLE_EDIT:"Editer un utilisateur",USER_TITLE_NEW:"Créer un utilisateur",USER_TITLE_IMPORT_XLS:"Importer en masse des utilisateurs",USER_TITLE_EXPORT_XLS:"Exporter en masse des utilisateurs",USER_FORM_LOGIN:"Identifiant",USER_FORM_FIRSTNAME:"Prénom",USER_FORM_LASTNAME:"Nom de famille",USER_FORM_EMAIL:"Email",USER_FORM_LANGUAGE:"Langue",USER_FORM_AUTHORITIES:"Rôles",USER_LIST_LOGIN:"Identifiant",USER_LIST_MAIL:"Email",USER_LIST_LANGUAGE:"Langue",USER_LIST_AUTHORITIES:"Rôle"}),e.translations("en",{error:{userexists:"Login name already used!",emailexists:"E-mail is already in use!"},USER_MENU:"Users",USER_TITLE_DELETE:"User delete",USER_TITLE_VIEW:"User details",USER_TITLE_LIST:"User list",USER_TITLE_EDIT:"User edition",USER_TITLE_NEW:"User creation",USER_TITLE_IMPORT_XLS:"Users mass import",USER_TITLE_EXPORT_XLS:"Users mass export",USER_FORM_LOGIN:"Login",USER_FORM_FIRSTNAME:"Firstname",USER_FORM_LASTNAME:"Lastname",USER_FORM_EMAIL:"Email",USER_FORM_LANGUAGE:"Language",USER_FORM_AUTHORITIES:"Authorities",USER_LIST_LOGIN:"Login",USER_LIST_MAIL:"Email",USER_LIST_LANGUAGE:"Language",USER_LIST_AUTHORITIES:"Authorities"})}]),angular.module("adama-web").config(["$stateProvider",function(e){e.state("app.personal.password",{url:"/password",templateUrl:"adama-web/account/password/password.html",controller:"PasswordCtrl",controllerAs:"ctrl",data:{pageTitle:"ACCOUNT_PASSWORD"}})}]),angular.module("adama-web").config(["$translateProvider",function(e){e.translations("fr",{ACCOUNT_PASSWORD:"Modifier mon mot de passe",ACCOUNT_PASSWORD_TITLE:"Modifier mon mot de passe",ACCOUNT_PASSWORD_NEWPASSWORD:"Mot de passe",ACCOUNT_PASSWORD_NEWPASSWORD_PLACEHOLDER:"Mot de passe ?",ACCOUNT_PASSWORD_NEWPASSWORD_REQUIRED:"Le mot de passe est obligatoire",ACCOUNT_PASSWORD_NEWPASSWORD_MINLENGTH:"Le mot de passe doit être composé d'au moins 5 caractères.",ACCOUNT_PASSWORD_NEWPASSWORD_MAXLENGTH:"Le mot de passe doit être composé d'au plus 50 caractères.",ACCOUNT_PASSWORD_CONFIRM_NEWPASSWORD:"Confirmation du mot de passe",ACCOUNT_PASSWORD_CONFIRM_NEWPASSWORD_PLACEHOLDER:"Confirmation du mot de passe ?",ACCOUNT_PASSWORD_CONFIRM_NEWPASSWORD_REQUIRED:"La confirmation du mot de passe est obligatoire",ACCOUNT_PASSWORD_CONFIRM_NEWPASSWORD_MINLENGTH:"La confirmation du mot de passe doit être composé d'au moins 5 caractères.",ACCOUNT_PASSWORD_CONFIRM_NEWPASSWORD_MAXLENGTH:"La confirmation du mot de passe doit être composé d'au plus 50 caractères.",ACCOUNT_PASSWORD_CONFIRM_NEWPASSWORD_PATTERN:"Les mots de passe ne sont pas égaux.",ACCOUNT_PASSWORD_SUBMIT:"Enregistrer",ACCOUNT_PASSWORD_SAVE_SUCCESS:"Le mot de passe a été changé avec succès.",ACCOUNT_PASSWORD_SAVE_ERROR:"Le mot de passe n'a pu être changé."}),e.translations("en",{ACCOUNT_PASSWORD:"Change my password",ACCOUNT_PASSWORD_TITLE:"Change my password",ACCOUNT_PASSWORD_NEWPASSWORD:"Password",ACCOUNT_PASSWORD_NEWPASSWORD_PLACEHOLDER:"Password ?",ACCOUNT_PASSWORD_NEWPASSWORD_REQUIRED:"Your password is required.",ACCOUNT_PASSWORD_NEWPASSWORD_MINLENGTH:"Your password is required to be at least 5 characters.",ACCOUNT_PASSWORD_NEWPASSWORD_MAXLENGTH:"Your password cannot be longer than 50 characters.",ACCOUNT_PASSWORD_CONFIRM_NEWPASSWORD:"Password confirmation",ACCOUNT_PASSWORD_CONFIRM_NEWPASSWORD_PLACEHOLDER:"Password confirmation ?",ACCOUNT_PASSWORD_CONFIRM_NEWPASSWORD_REQUIRED:"Your confirmation password is required.",ACCOUNT_PASSWORD_CONFIRM_NEWPASSWORD_MINLENGTH:"Your confirmation password is required to be at least 5 characters.",ACCOUNT_PASSWORD_CONFIRM_NEWPASSWORD_MAXLENGTH:"Your confirmation password cannot be longer than 50 characters.",ACCOUNT_PASSWORD_CONFIRM_NEWPASSWORD_PATTERN:"Password and confirmation do not match.",ACCOUNT_PASSWORD_SUBMIT:"Save",ACCOUNT_PASSWORD_SAVE_SUCCESS:"Password successfully changed.",ACCOUNT_PASSWORD_SAVE_ERROR:"Password could not be changed."})}]),angular.module("adama-web").controller("PasswordCtrl",["Auth","Principal","AlertService",function(e,t,a){var r=this;t.identity().then(function(e){r.account=e}),r.changePassword=function(){e.changePassword(r.password).then(function(){a.success("ACCOUNT_PASSWORD_SAVE_SUCCESS")})["catch"](function(){a.error("ACCOUNT_PASSWORD_SAVE_ERROR")})}}]),angular.module("adama-web").config(["$stateProvider",function(e){e.state("app.personal.settings",{url:"/settings",templateUrl:"adama-web/account/settings/settings.html",controller:"SettingsCtrl",controllerAs:"ctrl",data:{pageTitle:"ACCOUNT_SETTINGS"}})}]),angular.module("adama-web").config(["$translateProvider",function(e){e.translations("fr",{ACCOUNT_SETTINGS:"Mon profil",ACCOUNT_SETTINGS_TITLE:"Mon profil",ACCOUNT_SETTINGS_FIRSTNAME:"Prénom",ACCOUNT_SETTINGS_FIRSTNAME_PLACEHOLDER:"Prénom ?",ACCOUNT_SETTINGS_FIRSTNAME_REQUIRED:"Votre prénom est obligatoire.",ACCOUNT_SETTINGS_FIRSTNAME_MAXLENGTH:"Votre prénom doit être composé d'au plus 50 caractères.",ACCOUNT_SETTINGS_LASTNAME:"Nom de famille",ACCOUNT_SETTINGS_LASTNAME_PLACEHOLDER:"Nom de famille ?",ACCOUNT_SETTINGS_LASTNAME_REQUIRED:"Votre nom de famille est obligatoire.",ACCOUNT_SETTINGS_LASTNAME_MAXLENGTH:"Votre nom de famille doit être composé d'au plus 50 caractères.",ACCOUNT_SETTINGS_EMAIL:"Email",ACCOUNT_SETTINGS_EMAIL_PLACEHOLDER:"Email ?",ACCOUNT_SETTINGS_EMAIL_REQUIRED:"Votre email est obligatoire.",ACCOUNT_SETTINGS_EMAIL_EMAIL:"Votre email est invalide.",ACCOUNT_SETTINGS_EMAIL_MAXLENGTH:"Votre email doit être composé d'au plus 100 caractères.",ACCOUNT_SETTINGS_LANGUAGE:"Langue",ACCOUNT_SETTINGS_SUBMIT:"Enregistrer",ACCOUNT_SETTINGS_SAVE_SUCCESS:"Enregistrement du profil avec succès.",ACCOUNT_SETTINGS_SAVE_ERROR:"Impossible d'enregistrer le profil."}),e.translations("en",{ACCOUNT_SETTINGS:"My profile",ACCOUNT_SETTINGS_TITLE:"My profile",ACCOUNT_SETTINGS_FIRSTNAME:"First name",ACCOUNT_SETTINGS_FIRSTNAME_PLACEHOLDER:"First name ?",ACCOUNT_SETTINGS_FIRSTNAME_REQUIRED:"Your first name is required.",ACCOUNT_SETTINGS_FIRSTNAME_MAXLENGTH:"Your first name cannot be longer than 50 characters.",ACCOUNT_SETTINGS_LASTNAME:"Last name",ACCOUNT_SETTINGS_LASTNAME_PLACEHOLDER:"Last name ?",ACCOUNT_SETTINGS_LASTNAME_REQUIRED:"Your last name is required.",ACCOUNT_SETTINGS_LASTNAME_MAXLENGTH:"Your last name cannot be longer than 50 characters.",ACCOUNT_SETTINGS_EMAIL:"Email",ACCOUNT_SETTINGS_EMAIL_PLACEHOLDER:"Email ?",ACCOUNT_SETTINGS_EMAIL_REQUIRED:"Your e-mail is required.",ACCOUNT_SETTINGS_EMAIL_EMAIL:"Your e-mail is invalid.",ACCOUNT_SETTINGS_EMAIL_MAXLENGTH:"Your e-mail cannot be longer than 100 characters.",ACCOUNT_SETTINGS_LANGUAGE:"Language",ACCOUNT_SETTINGS_SUBMIT:"Save",ACCOUNT_SETTINGS_SAVE_SUCCESS:"Profile successfully saved.",ACCOUNT_SETTINGS_SAVE_ERROR:"Profile could not be saved."})}]),angular.module("adama-web").controller("SettingsCtrl",["Principal","Auth","language","AlertService","$translate",function(e,t,a,r,n){var o=this,i=function(e){return{activated:e.activated,email:e.email,firstName:e.firstName,langKey:e.langKey,lastName:e.lastName,login:e.login}};e.identity().then(function(e){o.settingsAccount=i(e)}),o.save=function(){t.updateAccount(o.settingsAccount).then(function(){return e.identity(!0).then(function(e){o.settingsAccount=i(e),a.getCurrent().then(function(e){o.settingsAccount.langKey!==e&&n.use(o.settingsAccount.langKey),r.success("ACCOUNT_SETTINGS_SAVE_SUCCESS")})})})["catch"](function(){r.error("ACCOUNT_SETTINGS_SAVE_ERROR")})}}]),angular.module("adama-web").component("arkFooter",{templateUrl:"adama-web/ark/ark-footer/ark-footer.html"}),angular.module("adama-web").config(["$translateProvider",function(e){e.translations("fr",{TOGGLE_NAVIGATION:"Navigation",USERINFO_PROFILE:"Profil",USERINFO_PASSWORD:"Mot de passe",USERINFO_SIGNOUT:"Déconnection"}),e.translations("en",{TOGGLE_NAVIGATION:"Toggle navigation",USERINFO_PROFILE:"Profile",USERINFO_PASSWORD:"Password",USERINFO_SIGNOUT:"Sign out"})}]),angular.module("adama-web").component("arkHeader",{templateUrl:"adama-web/ark/ark-header/ark-header.html"}),angular.module("adama-web").component("languageSelector",{templateUrl:"adama-web/ark/language-selector/language-selector.html",controller:["$rootScope","$translate","language",function(e,t,a){var r=this;r.changeLanguage=function(e){t.use(e)};var n=function(){r.currentLanguage=t.use(),0===r.currentLanguage.indexOf("en")&&(r.currentLanguage="us")};e.$on("$translateChangeSuccess",function(){n()}),n(),a.getSelectorData().then(function(e){r.languages=e})}]}),angular.module("adama-web").component("mainNavigation",{templateUrl:"adama-web/ark/menu/main-navigation.html",controller:["$rootScope","$filter","menuService",function(e,t,a){var r,n,o=this;r=function(e,a){var r=angular.copy(a);r.subItems=[],n(r.subItems,a.subItems),r.label=t("translate")(r.label),e.push(r)},n=function(e,t){var a,n,o;if(t&&t.length)for(a=0,n=t.length;n>a;a++)o=t[a],r(e,o)};var i=function(){o.menuItems=[];var e=a.getItems();n(o.menuItems,e)};i(),e.$on("$translateChangeSuccess",function(){i()})}]}),angular.module("adama-web").provider("menuService",function(){var e=[];this.addItem=function(t){"right"!==t.position&&(t.position="left"),e.push(t)},this.$get=function(){var t={};return t.getItems=function(){return e},t}}),angular.module("adama-web").component("selectAll",{templateUrl:"adama-web/ark/select-all/select-all.html",bindings:{entityList:"<"},controller:function(){var e=this;e.isAllChecked=!1,e.checkAll=function(){e.isAllChecked=!e.isAllChecked,angular.forEach(e.entityList,function(t){t.isSelected=e.isAllChecked})}}}),angular.module("adama-web").component("userInfo",{templateUrl:"adama-web/ark/user-info/user-info.html",controller:["$rootScope","$state","Auth",function(e,t,a){var r=this;r.signout=function(){a.logout(),t.go("auth.signin")},e.$on("auth.updateAccount",function(e,t){r.account=t.account})}]}),angular.module("adama-web").component("viewAttribute",{templateUrl:"adama-web/ark/view-attribute/view-attribute.html",transclude:!0,bindings:{labelKey:"@",value:"<",valueKey:"@value"},controller:function(){}}),angular.module("adama-web").directive("jhAlert",["AlertService",function(e){return{restrict:"E",template:'<div class="content-wrapper" ng-cloak ng-if="alerts && alerts.length"><div class="box-body"><div ng-repeat="alert in alerts" class="alert alert-dismissible" ng-class="\'alert-\' + alert.type"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>{{ alert.msg }}</div></div></div>',controller:["$scope",function(t){t.alerts=e.get(),t.$on("$destroy",function(){t.alerts=[]})}]}}]).directive("jhAlertError",["AlertService","$rootScope","$translate",function(e,t,a){return{restrict:"E",template:'<div class="alerts" ng-if="alerts && alerts.length"><div ng-repeat="alert in alerts" class="alert alert-dismissible" ng-class="\'alert-\' + alert.type"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>{{ alert.msg }}</div></div>',controller:["$scope","jHipsterConstant",function(r,n){r.alerts=[];var o=function(t,a,n){a=a&&null!==a?a:t,r.alerts.push(e.add({type:"danger",msg:a,params:n,timeout:5e3,toast:e.isToast(),scoped:!0},r.alerts))},i=t.$on(n.appModule+".httpError",function(e,t){var r;switch(e.stopPropagation(),t.status){case 0:o("Server not reachable","error.server.not.reachable");break;case 400:var i=t.headers("X-"+n.appModule+"-error"),s=t.headers("X-"+n.appModule+"-params");if(i){var u=a.instant("global.menu.entities."+s);o(i,i,{entityName:u})}else if(t.data&&t.data.fieldErrors)for(r=0;r<t.data.fieldErrors.length;r++){var l=t.data.fieldErrors[r],c=l.field.replace(/\[\d*\]/g,"[]"),d=a.instant(n.appModule+"."+l.objectName+"."+c);o("Field "+d+" cannot be empty","error."+l.message,{fieldName:d})}else t.data&&t.data.message?o(t.data.message,t.data.message,t.data):o(t.data);break;default:o(t.data&&t.data.message?t.data.message:JSON.stringify(t))}});r.$on("$destroy",function(){void 0!==i&&null!==i&&(i(),r.alerts=[])})}]}}]),angular.module("adama-web").provider("AlertService",function(){var e=!1;this.$get=["$timeout","$sce","$translate",function(t,a,r){var n=0,o=[],i=5e3,s=function(){return e},u=function(){o=[]},l=function(){return o},c=function(e,t){return t.splice(e,1)},d=function(e,t){var a=t?t:o;return c(a.map(function(e){return e.id}).indexOf(e),a)},E=function(e){var t={type:e.type,msg:a.trustAsHtml(e.msg),id:e.alertId,timeout:e.timeout,toast:e.toast,position:e.position?e.position:"top right",scoped:e.scoped,close:function(e){return d(this.id,e)}};return t.scoped||o.push(t),t},m=function(e,a){
e.alertId=n++,e.msg=r.instant(e.msg,e.params);var o=E(e);return e.timeout&&e.timeout>0&&t(function(){d(e.alertId,a)},e.timeout),o},S=function(t,a,r){return m({type:"success",msg:t,params:a,timeout:i,toast:e,position:r})},_=function(t,a,r){return m({type:"danger",msg:t,params:a,timeout:i,toast:e,position:r})},R=function(t,a,r){return m({type:"warning",msg:t,params:a,timeout:i,toast:e,position:r})},p=function(t,a,r){return m({type:"info",msg:t,params:a,timeout:i,toast:e,position:r})};return{factory:E,isToast:s,add:m,closeAlert:d,closeAlertByIndex:c,clear:u,get:l,success:S,error:_,info:p,warning:R}}],this.showAsToast=function(t){e=t}}),angular.module("adama-web").factory("Auth",["$rootScope","$state","$q","$translate","Principal","AuthServerProvider","Account","Password","PasswordResetInit","PasswordResetFinish",function(e,t,a,r,n,o,i,s,u,l){return{login:function(e,t){var i=t||angular.noop,s=a.defer();return o.login(e).then(function(e){return n.identity(!0).then(function(t){r.use(t.langKey),s.resolve(e)}),i()})["catch"](function(e){return this.logout(),s.reject(e),i(e)}.bind(this)),s.promise},logout:function(){o.logout(),n.authenticate(null),e.previousStateName=void 0,e.previousStateNameParams=void 0},authorize:function(a){return n.identity(a).then(function(){var a=n.isAuthenticated();a&&e.toState.name&&"auth.signin"===e.toState.name&&t.go("app.main"),e.toState.data&&e.toState.data.authorities||a?e.toState.data&&e.toState.data.authorities&&e.toState.data.authorities.length>0&&!n.hasAnyAuthority(e.toState.data.authorities)&&(a?t.go("auth.accessDenied"):(e.previousStateName=e.toState,e.previousStateNameParams=e.toStateParams,t.go("auth.signin"))):t.go("auth.signin")})},updateAccount:function(t,a){var r=a||angular.noop;return i.save(t,function(){return e.$emit("auth.updateAccount",{account:t}),r(t)},function(e){return r(e)}.bind(this)).$promise},changePassword:function(e,t){var a=t||angular.noop;return s.save(e,function(){return a()},function(e){return a(e)}).$promise},resetPasswordInit:function(e,t){var a=t||angular.noop;return u.save(e,function(){return a()},function(e){return a(e)}).$promise},resetPasswordFinish:function(e,t){var a=t||angular.noop;return l.save(e,function(){return a()},function(e){return a(e)}).$promise}}}]),angular.module("adama-web").directive("hasAnyAuthority",["Principal",function(e){return{restrict:"A",link:function(t,a,r){var n=function(){a.removeClass("hidden")},o=function(){a.addClass("hidden")},i=r.hasAnyAuthority.replace(/\s+/g,"").split(","),s=function(t){var a;t&&n(),a=e.hasAnyAuthority(i),a?n():o()};i.length>0&&(s(!0),t.$watch(function(){return e.isAuthenticated()},function(){s(!0)}))}}}]).directive("hasAuthority",["Principal",function(e){return{restrict:"A",link:function(t,a,r){var n=function(){a.removeClass("hidden")},o=function(){a.addClass("hidden")},i=r.hasAuthority.replace(/\s+/g,""),s=function(t){t&&n(),e.hasAuthority(i).then(function(e){e?n():o()})};i.length>0&&(s(!0),t.$watch(function(){return e.isAuthenticated()},function(){s(!0)}))}}}]),angular.module("adama-web").factory("Principal",["$q","Account",function(e,t){var a,r=!1;return{isIdentityResolved:function(){return angular.isDefined(a)},isAuthenticated:function(){return r},hasAuthority:function(t){return r?this.identity().then(function(e){return e.authorities&&-1!==e.authorities.indexOf(t)},function(){return!1}):e.when(!1)},hasAnyAuthority:function(e){if(!r||!a||!a.authorities)return!1;for(var t=0;t<e.length;t++)if(-1!==a.authorities.indexOf(e[t]))return!0;return!1},authenticate:function(e){a=e,r=null!==e},identity:function(n){var o=e.defer();return n===!0&&(a=void 0),angular.isDefined(a)?(o.resolve(a),o.promise):(t.get().$promise.then(function(e){a=e.data,r=!0,o.resolve(a)})["catch"](function(){a=null,r=!1,o.resolve(a)}),o.promise)}}}]),angular.module("adama-web").factory("authInterceptor",["$rootScope","$q","$location","localStorageService",function(e,t,a,r){return{request:function(e){e.headers=e.headers||{};var t=r.get("token");return t&&t.expires&&t.expires>(new Date).getTime()&&(e.headers["x-auth-token"]=t.token),e}}}]).factory("authExpiredInterceptor",["$rootScope","$q","$injector","localStorageService",function(e,t,a,r){return{responseError:function(e){if(401===e.status&&("invalid_token"===e.data.error||"Unauthorized"===e.data.error)){r.remove("token");var n=a.get("Principal");if(n.isAuthenticated()){var o=a.get("Auth");o.authorize(!0)}}return t.reject(e)}}}]),angular.module("adama-web").factory("errorHandlerInterceptor",["$q","$rootScope","jHipsterConstant",function(e,t,a){return{responseError:function(r){return 401===r.status&&0===r.data.path.indexOf("/api/account")||t.$emit(a.appModule+".httpError",r),e.reject(r)}}}]),angular.module("adama-web").factory("notificationInterceptor",["$q","AlertService","jHipsterConstant",function(e,t,a){return{response:function(e){var r=e.headers("X-"+a.appModule+"-alert");return angular.isString(r)&&t.success(r,{param:e.headers("X-"+a.appModule+"-params")}),e}}}]),angular.module("adama-web").service("Base64",function(){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";this.encode=function(t){for(var a,r,n,o,i,s="",u="",l="",c=0;c<t.length;)a=t.charCodeAt(c++),r=t.charCodeAt(c++),u=t.charCodeAt(c++),n=a>>2,o=(3&a)<<4|r>>4,i=(15&r)<<2|u>>6,l=63&u,isNaN(r)?i=l=64:isNaN(u)&&(l=64),s=s+e.charAt(n)+e.charAt(o)+e.charAt(i)+e.charAt(l),a=r=u="",n=o=i=l="";return s},this.decode=function(t){var a,r,n,o,i,s="",u="",l="",c=0;for(t=t.replace(/[^A-Za-z0-9\+\/\=]/g,"");c<t.length;)n=e.indexOf(t.charAt(c++)),o=e.indexOf(t.charAt(c++)),i=e.indexOf(t.charAt(c++)),l=e.indexOf(t.charAt(c++)),a=n<<2|o>>4,r=(15&o)<<4|i>>2,u=(3&i)<<6|l,s+=String.fromCharCode(a),64!==i&&(s+=String.fromCharCode(r)),64!==l&&(s+=String.fromCharCode(u)),a=r=u="",n=o=i=l=""}}).factory("StorageService",["$window",function(e){return{get:function(t){return JSON.parse(e.localStorage.getItem(t))},save:function(t,a){e.localStorage.setItem(t,JSON.stringify(a))},remove:function(t){e.localStorage.removeItem(t)},clearAll:function(){e.localStorage.clear()}}}]),angular.module("adama-web").service("ParseLinks",function(){this.parse=function(e){if(0===e.length)throw new Error("input must not be of zero length");var t=e.split(","),a={};return angular.forEach(t,function(e){var t=e.split(";");if(2!==t.length)throw new Error('section could not be split on ";"');var r=t[0].replace(/<(.*)>/,"$1").trim(),n={};r.replace(new RegExp("([^?=&]+)(=([^&]*))?","g"),function(e,t,a,r){n[t]=r});var o=n.page;angular.isString(o)&&(o=parseInt(o));var i=t[1].replace(/rel='(.*)'/,"$1").trim();a[i]=o}),a}}),angular.module("adama-web").factory("AuthServerProvider",["$http","localStorageService","Base64","jHipsterConstant",function(e,t,a,r){return{login:function(a){var n="username="+encodeURIComponent(a.username)+"&password="+encodeURIComponent(a.password);return e.post(r.apiBase+"api/authenticate",n,{headers:{"Content-Type":"application/x-www-form-urlencoded",Accept:"application/json"}}).success(function(e){return t.set("token",e),e})},logout:function(){t.clearAll()},getToken:function(){return t.get("token")},hasValidToken:function(){var e=this.getToken();return e&&e.expires&&e.expires>(new Date).getTime()}}}]),angular.module("adama-web").factory("Account",["$resource","jHipsterConstant",function(e,t){return e(t.apiBase+"api/account",{},{get:{method:"GET",params:{},isArray:!1,interceptor:{response:function(e){return e}}}})}]),angular.module("adama-web").factory("Password",["$resource","jHipsterConstant",function(e,t){return e(t.apiBase+"api/account/change_password",{},{})}]),angular.module("adama-web").factory("PasswordResetInit",["$resource","jHipsterConstant",function(e,t){return e(t.apiBase+"api/account/reset_password/init",{},{})}]),angular.module("adama-web").factory("PasswordResetFinish",["$resource","jHipsterConstant",function(e,t){return e(t.apiBase+"api/account/reset_password/finish",{},{})}]);
//# sourceMappingURL=adama-web-min.js.map
