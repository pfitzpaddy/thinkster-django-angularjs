(function () {
  'use strict';

  angular
    .module('thinkster.config')
    .config(config);

  config.$inject = ['$locationProvider', '$logProvider'];

  /**
  * @name config
  * @desc Enable HTML5 routing
  */
  function config($locationProvider, $logProvider) {
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
    
    // remove leaflet logging
    $logProvider.debugEnabled(false);
  }
})();