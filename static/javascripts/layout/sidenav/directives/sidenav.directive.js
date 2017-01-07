/**
* SidenavController
* @namespace reporthub.layout.sidenav.directives
*/
(function () {
  'use strict';

  angular
    .module('reporthub.layout.sidenav.directives')
    .directive('sidenav', sidenav);

  /**
  * @namespace Posts
  */
  function sidenav() {
    /**
    * @name directive
    * @desc The directive to be returned
    * @memberOf reporthub.layout.sidenav.directives.SidenavController
    */
    var directive = {
      controller: 'SidenavController',
      controllerAs: 'vm',
      restrict: 'E',
      scope: {
        layout: '='
      },
      templateUrl: '/static/templates/layout/sidenav/sidenav.html'
    };

    return directive;
  }
})();