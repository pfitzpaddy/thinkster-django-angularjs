(function () {
  'use strict';

  angular
    .module('reporthub', [
      'reporthub.config',
      'reporthub.routes',
      'reporthub.authentication',
      'reporthub.layout',
      'leaflet-directive',
      'ngCountTo'
    ]);

  angular
    .module('reporthub.config', []);

  angular
    .module('reporthub.routes', ['ngRoute']);

  angular
    .module('reporthub')
    .run(run);

  run.$inject = ['$http'];

  /**
  * @name run
  * @desc Update xsrf $http headers to align with Django's defaults
  */
  function run($http) {
    $http.defaults.xsrfHeaderName = 'X-CSRFToken';
    $http.defaults.xsrfCookieName = 'csrftoken';
  }
    
})();