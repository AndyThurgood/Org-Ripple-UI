'use strict';

angular.module('openehrPocApp')
  .factory('CancerMdt', function ($http) {

    var patientIdOveride = 9999999000;

    var getComposition = function (patientId) {
      return $http.get('/api/patients/' + (patientIdOveride || patientId) + '/mdtreports/');
    };

    var create = function (patientId, composition) {
      console.log('create cancerMdtComposition: ');
      console.log(composition);
      return $http.post('/api/patients/' + (patientIdOveride || patientId) + '/mdtreports', composition);
    };

    var update = function (patientId, composition) {
      console.log('update cancerMdtComposition: ');
      console.log(composition);
      return $http.put('/api/patients/' + (patientIdOveride || patientId) + '/mdtreports', composition);
    };

    return {
      getComposition: getComposition,
      create: create,
      update: update
    };
  });


