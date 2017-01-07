(function () {
  'use strict';

  angular
    .module('reporthub.authentication', [
      'reporthub.authentication.controllers',
      'reporthub.authentication.services'
    ]);

  angular
    .module('reporthub.authentication.controllers', []);

  angular
    .module('reporthub.authentication.services', ['ngCookies']);
    
})();