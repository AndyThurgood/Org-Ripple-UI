'use strict';

angular
  .module('openehrPocApp', [
    'ngResource',
    'ngTouch',
    'ngAnimate',
    'ui.router',
    'ui.bootstrap',
    'angular-loading-bar',
    'growlNotifications',
    'angularUtils.directives.dirPagination'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('patients-list', {
        url: '/patients?ageRange&department&order&reverse',
        views: {
          main: { templateUrl: 'views/patients/patients-list.html', controller: 'PatientsListCtrl' }
        }
      })

      .state('header', {
        url: '/?role&email',
        views: {
          main: { controller: 'headerController' }
        }
      })

      .state('patients-charts', {
         url: '/',
        views: {
          main: { templateUrl: 'views/patients/patients-charts.html', controller: 'PatientsChartsCtrl' }
        }
      })

      .state('patients-lookup', {
        url: '/lookup',
        views: {
          actions: { templateUrl: 'views/home-sidebar.html' },
          main: { controller: 'PatientsLookupCtrl' }
        }
      })

      .state('patients-summary', {
        url: '/patients/{patientId:int}/patients-summary',
        views: {
          'user-context': { templateUrl: 'views/patients/patients-context.html', controller: 'PatientsDetailCtrl' },
          actions: { templateUrl: 'views/patients/patients-sidebar.html', controller: 'PatientsDetailCtrl'},
          main: { templateUrl: 'views/patients/patients-summary.html', controller: 'PatientsSummaryCtrl' }
        }
      })

      .state('diagnoses-list', {
        url: '/patients/{patientId:int}/diagnoses',
        views: {
          'user-context': { templateUrl: 'views/patients/patients-context.html', controller: 'PatientsDetailCtrl' },
          actions: { templateUrl: 'views/patients/patients-sidebar.html', controller: 'PatientsDetailCtrl' },
          main: { templateUrl: 'views/diagnoses/diagnoses-list.html', controller: 'DiagnosesListCtrl' }
        }
      })

      .state('diagnoses-detail', {
        url: '/patients/{patientId:int}/diagnoses/{diagnosisIndex:int}',
        views: {
          'user-context': { templateUrl: 'views/patients/patients-context.html', controller: 'PatientsDetailCtrl' },
          actions: { templateUrl: 'views/patients/patients-sidebar.html', controller: 'PatientsDetailCtrl' },
          main: { templateUrl: 'views/diagnoses/diagnoses-list.html', controller: 'DiagnosesListCtrl' },
          detail: { templateUrl: 'views/diagnoses/diagnoses-detail.html', controller: 'DiagnosesDetailCtrl' }
        }
      })

      .state('allergies', {
        url: '/patients/{patientId:int}/allergies',
        views: {
          'user-context': { templateUrl: 'views/patients/patients-context.html', controller: 'PatientsDetailCtrl' },
          actions: { templateUrl: 'views/patients/patients-sidebar.html', controller: 'PatientsDetailCtrl' },
          main: { templateUrl: 'views/allergies/allergies-list.html', controller: 'AllergiesListCtrl' }
        }
      })

      .state('allergies-detail', {
        url: '/patients/{patientId:int}/allergies/{allergyIndex:int}',
        views: {
          'user-context': { templateUrl: 'views/patients/patients-context.html', controller: 'PatientsDetailCtrl' },
          actions: { templateUrl: 'views/patients/patients-sidebar.html', controller: 'PatientsDetailCtrl' },
          main: { templateUrl: 'views/allergies/allergies-list.html', controller: 'AllergiesListCtrl' },
          detail: { templateUrl: 'views/allergies/allergies-detail.html', controller: 'AllergiesDetailCtrl' }
        }
      })

      .state('medications', {
        url: '/patients/{patientId:int}/medications',
        views: {
          'user-context': { templateUrl: 'views/patients/patients-context.html', controller: 'PatientsDetailCtrl' },
          actions: { templateUrl: 'views/patients/patients-sidebar.html', controller: 'PatientsDetailCtrl' },
          main: { templateUrl: 'views/medications/medications-list.html', controller: 'MedicationsListCtrl' }
        }
      })

      .state('medications-detail', {
        url: '/patients/{patientId:int}/medications/{medicationIndex:int}',
        views: {
          'user-context': { templateUrl: 'views/patients/patients-context.html', controller: 'PatientsDetailCtrl' },
          actions: { templateUrl: 'views/patients/patients-sidebar.html', controller: 'PatientsDetailCtrl' },
          main: { templateUrl: 'views/medications/medications-list.html', controller: 'MedicationsListCtrl' },
          detail: { templateUrl: 'views/medications/medications-detail.html', controller: 'MedicationsDetailCtrl' }
        }
      })

      .state('contacts', {
        url: '/patients/{patientId:int}/contacts',
        views: {
          'user-context': { templateUrl: 'views/patients/patients-context.html', controller: 'PatientsDetailCtrl' },
          actions: { templateUrl: 'views/patients/patients-sidebar.html', controller: 'PatientsDetailCtrl' },
          main: { templateUrl: 'views/contacts/contacts-list.html', controller: 'ContactsListCtrl' }
        }
      })

      .state('contacts-detail', {
        url: '/patients/{patientId:int}/contacts/{contactIndex:int}',
        views: {
          'user-context': { templateUrl: 'views/patients/patients-context.html', controller: 'PatientsDetailCtrl' },
          actions: { templateUrl: 'views/patients/patients-sidebar.html', controller: 'PatientsDetailCtrl' },
          main: { templateUrl: 'views/contacts/contacts-list.html', controller: 'ContactsListCtrl' },
          detail: { templateUrl: 'views/contacts/contacts-detail.html', controller: 'ContactsDetailCtrl' }
        }
      })

      .state('transferOfCare', {
        url: '/patients/{patientId:int}/transfer-of-care-list',
        views: {
          'user-context': { templateUrl: 'views/patients/patients-context.html', controller: 'PatientsDetailCtrl' },
          actions: { templateUrl: 'views/patients/patients-sidebar.html', controller: 'PatientsDetailCtrl' },
          main: { templateUrl: 'views/transfer-of-care/transfer-of-care-list.html', controller: 'TransferOfCareListCtrl' }
        }
      })

      .state('transferOfCare-detail', {
        url: '/patients/{patientId:int}/transfer-of-care-detail/{transferOfCareIndex:int}',
        views: {
          'user-context': { templateUrl: 'views/patients/patients-context.html', controller: 'PatientsDetailCtrl' },
          actions: { templateUrl: 'views/patients/patients-sidebar.html', controller: 'PatientsDetailCtrl' },
          main: { templateUrl: 'views/transfer-of-care/transfer-of-care-list.html', controller: 'TransferOfCareListCtrl' },
          detail: { templateUrl: 'views/transfer-of-care/transfer-of-care-detail.html', controller: 'TransferOfCareDetailCtrl' }
        }
      })

      .state('transferOfCare-create', {
        url: '/patients/{patientId:int}/transfer-of-care-create',
        views: {
          'user-context': { templateUrl: 'views/patients/patients-context.html', controller: 'PatientsDetailCtrl' },
          actions: { templateUrl: 'views/patients/patients-sidebar.html', controller: 'PatientsDetailCtrl' },
          main: { controller: 'TransferOfCareCtrl' }
        }
      })

    .state('cancerMdt', {
      url: '/patients/{patientId:int}/cancer-mdt-list',
      views: {
        'user-context': { templateUrl: 'views/patients/patients-context.html', controller: 'PatientsDetailCtrl' },
        actions: { templateUrl: 'views/patients/patients-sidebar.html', controller: 'PatientsDetailCtrl' },
        main: { templateUrl: 'views/cancer-mdt/cancermdt-list.html', controller: 'CancerMdtListCtrl' }
      }
    })

      .state('cancerMdt-detail', {
        url: '/patients/{patientId:int}/cancer-mdt-detail/{cancerMdtIndex:int}',
        views: {
          'user-context': { templateUrl: 'views/patients/patients-context.html', controller: 'PatientsDetailCtrl' },
          actions: { templateUrl: 'views/patients/patients-sidebar.html', controller: 'PatientsDetailCtrl' },
          main: { templateUrl: 'views/cancer-mdt/cancermdt-list.html', controller: 'CancerMdtListCtrl' },
          detail: { templateUrl: 'views/cancer-mdt/cancer-mdt-detail.html', controller: 'CancerMdtDetailCtrl' }
        }
      })
    
    .state('referrals', {
        url: '/patients/{patientId:int}/referrals',
        views: {
          'user-context': { templateUrl: 'views/patients/patients-context.html', controller: 'PatientsDetailCtrl' },
          actions: { templateUrl: 'views/patients/patients-sidebar.html', controller: 'PatientsDetailCtrl' },
          main: { templateUrl: 'views/referrals/referrals-list.html', controller: 'ReferralsListCtrl' }
        }
      })

      .state('referrals-detail', {
        url: '/patients/{patientId:int}/referrals/{referralIndex:int}',
        views: {
          'user-context': { templateUrl: 'views/patients/patients-context.html', controller: 'PatientsDetailCtrl' },
          actions: { templateUrl: 'views/patients/patients-sidebar.html', controller: 'PatientsDetailCtrl' },
          main: { templateUrl: 'views/referrals/referrals-list.html', controller: 'ReferralsListCtrl' },
          detail: { templateUrl: 'views/referrals/referrals-detail.html', controller: 'referralsDetailCtrl' }
        }
      })
    
    .state('eolcareplans', {
        url: '/patients/{patientId:int}/eolcareplans',
        views: {
          'user-context': { templateUrl: 'views/patients/patients-context.html', controller: 'PatientsDetailCtrl' },
          actions: { templateUrl: 'views/patients/patients-sidebar.html', controller: 'PatientsDetailCtrl' },
          main: { templateUrl: 'views/care-plans/eolcareplans-list.html', controller: 'EolcareplansListCtrl' }
        }
      })

      .state('eolcareplans-detail', {
        url: '/patients/{patientId:int}/eolcareplans/{eolcareplansIndex:int}',
        views: {
          'user-context': { templateUrl: 'views/patients/patients-context.html', controller: 'PatientsDetailCtrl' },
          actions: { templateUrl: 'views/patients/patients-sidebar.html', controller: 'PatientsDetailCtrl' },
          main: { templateUrl: 'views/care-plans/eolcareplans-list.html', controller: 'EolcareplansListCtrl' },
          detail: { templateUrl: 'views/care-plans/eolcareplans-detail.html', controller: 'EolcareplansDetailCtrl' }
        }
      })
    
     .state('appointments', {
        url: '/patients/{patientId:int}/appointments',
        views: {
          'user-context': { templateUrl: 'views/patients/patients-context.html', controller: 'PatientsDetailCtrl' },
          actions: { templateUrl: 'views/patients/patients-sidebar.html', controller: 'PatientsDetailCtrl' },
          main: { templateUrl: 'views/appointments/appointments-list.html', controller: 'AppointmentsListCtrl' }
        }
      })

      .state('appointments-detail', {
        url: '/patients/{patientId:int}/appointments/{appointmentIndex:int}',
        views: {
          'user-context': { templateUrl: 'views/patients/patients-context.html', controller: 'PatientsDetailCtrl' },
          actions: { templateUrl: 'views/patients/patients-sidebar.html', controller: 'PatientsDetailCtrl' },
          main: { templateUrl: 'views/appointments/appointments-list.html', controller: 'AppointmentsListCtrl' },
          detail: { templateUrl: 'views/appointments/appointments-detail.html', controller: 'appointmentsDetailCtrl' }
        }
      });

  })

.directive('datepickerPopup', function (){
    return {
        restrict: 'EAC',
        require: 'ngModel',
        link: function(scope, element, attr, controller) {
      //remove the default formatter from the input directive to prevent conflict
      controller.$formatters.shift();
  }
}
})

.config(function (datepickerConfig, datepickerPopupConfig, cfpLoadingBarProvider) {
    datepickerConfig.startingDay          = 1;
    datepickerPopupConfig.showButtonBar   = false;
    datepickerPopupConfig.datepickerPopup = 'dd-MMM-yyyy';
    cfpLoadingBarProvider.includeSpinner  = false;
  })
  .config(function (paginationTemplateProvider) {
    paginationTemplateProvider.setPath('views/dirPagination.tpl.html');
  });
