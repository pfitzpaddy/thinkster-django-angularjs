(function () {
  'use strict';

  angular
    .module('reporthub.layout', [
      'reporthub.layout.controllers',
      'reporthub.layout.navbar',
      'reporthub.layout.sidenav',
      'reporthub.layout.header',
      'reporthub.layout.dashboard',
      'reporthub.layout.widgets'
    ]);

  angular
    .module('reporthub.layout.controllers', []);

  angular
    .module('reporthub.layout.navbar', []);

  angular
    .module('reporthub.layout.sidenav', []);

  angular
    .module('reporthub.layout.header', []);

  angular
    .module('reporthub.layout.dashboard', []);

  angular
    .module('reporthub.layout.widgets', []);
})();