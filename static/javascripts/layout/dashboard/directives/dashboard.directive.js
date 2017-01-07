/**
* Dashboard
* @namespace reporthub.layout.dashboard.directives
*/
(function () {
  'use strict';

  angular
    .module('reporthub.layout.dashboard.directives')
    .directive('dashboard', dashboard);

  /**
  * @namespace Posts
  */
  function dashboard() {
    /**
    * @name directive
    * @desc The directive to be returned
    * @memberOf reporthub.layout.dashboard.directives.Dashboard
    */
    var directive = {
      controller: 'DashboardController',
      controllerAs: 'vm',
      restrict: 'E',
      scope: {
        layout: '='
      },
      templateUrl: '/static/templates/layout/dashboard/dashboard.html'
    };

    return directive;
  }
})();