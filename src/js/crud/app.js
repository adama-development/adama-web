'use strict';

angular.module('adama-toolkit').config(function($translateProvider) {
	$translateProvider.translations('fr', {
		'CRUD_BACK_TO_LIST': 'Retour à la liste',
		'CRUD_CANCEL': 'Annuler',
		'CRUD_CONFIRM_DELETE': 'Confirmer la suppression',
		'CRUD_CONFIRM_EDIT': 'Editer',
		'CRUD_CONFIRM_SAVE': 'Créer',
		'CRUD_DELETE_MESSAGE': 'Etes-vous certain de vouloir supprimer ?',
		'CRUD_DELETE_SUCCESS': 'Suppression avec succès.',
		'CRUD_DELETE_ERROR': 'Erreur, impossible de supprimer.',
		'CRUD_NEW': 'Nouveau',
		'CRUD_MASS_IMPORT': 'Import massif',
		'CRUD_MASS_EXPORT': 'Export massif',
		'CRUD_EDIT_SUCCESS': 'Enregistrement avec succès.',
		'CRUD_NEW_SUCCESS': 'Création avec succès.',
		'CRUD_SAVE_ERROR': 'Erreur, impossible de sauvegarder.',
		'CRUD_FORM_ERROR_REQUIRED': 'Le champs est obligatoire.',
		'CRUD_FORM_ERROR_MAXLENGTH': 'Le champs ne doit pas dépasser {{ maxlength }} caractères.',
		'CRUD_FORM_ERROR_EMAIL': 'Le format est invalide.',
		'CRUD_FORM_SEARCH': 'Recherche',
		'CRUD_FORM_SEARCH_SUBMIT': 'Rechercher',
		'CRUD_ACTION_VIEW': 'Détails',
		'CRUD_ACTION_EDIT': 'Editer',
		'CRUD_ACTION_DELETE': 'Supprimer'
	});

	$translateProvider.translations('en', {
		'CRUD_BACK_TO_LIST': 'Back to list',
		'CRUD_CANCEL': 'Cancel',
		'CRUD_CONFIRM_DELETE': 'Confirm delete',
		'CRUD_CONFIRM_EDIT': 'Edit',
		'CRUD_CONFIRM_SAVE': 'Save',
		'CRUD_DELETE_MESSAGE': 'Are you sure you want to delete ?',
		'CRUD_DELETE_SUCCESS': 'Delete successfull.',
		'CRUD_DELETE_ERROR': 'Error, impossible to delete.',
		'CRUD_NEW': 'New',
		'CRUD_MASS_IMPORT': 'Mass import',
		'CRUD_MASS_EXPORT': 'Mass export',
		'CRUD_EDIT_SUCCESS': 'Save successfull.',
		'CRUD_NEW_SUCCESS': 'Creation successful.',
		'CRUD_SAVE_ERROR': 'Error, impossible to save.',
		'CRUD_FORM_ERROR_REQUIRED': 'This field is required.',
		'CRUD_FORM_ERROR_MAXLENGTH': 'This field cannot be longer than {{ maxlength }} characters.',
		'CRUD_FORM_ERROR_EMAIL': 'Format is invalid.',
		'CRUD_FORM_SEARCH': 'Search',
		'CRUD_FORM_SEARCH_SUBMIT': 'Search',
		'CRUD_ACTION_VIEW': 'View details',
		'CRUD_ACTION_EDIT': 'Edit',
		'CRUD_ACTION_DELETE': 'Delete'
	});
});
