/**
* NavbarController
* @namespace reporthub.layout.navbar.directives
*/
(function () {
  'use strict';

  angular
    .module('reporthub.layout.navbar.directives')
    .directive('navbar', navbar);

  /**
  * @namespace Posts
  */
  function navbar() {
    /**
    * @name directive
    * @desc The directive to be returned
    * @memberOf reporthub.layout.navbar.directives.NavbarController
    */
    var directive = {
      controller: 'NavbarController',
      controllerAs: 'vm',
      restrict: 'E',
      scope: {
        layout: '='
      },
      templateUrl: '/static/templates/layout/navbar/navbar.html'
    };

    return directive;
  }
})();