'use strict';

angular.module('splain-app')
  .controller('SolrSettingsCtrl', function ($scope, solrSearchSvc, fieldSpecSvc, normalDocsSvc, settingsStoreSvc) {

    $scope.solrSettings = settingsStoreSvc.get();

    $scope.solrSettings.publishSearcher = function() {
      settingsStoreSvc.parse();

      $scope.main.search()
      .then(function() {
        settingsStoreSvc.commit();
      });
    };
    
  });
