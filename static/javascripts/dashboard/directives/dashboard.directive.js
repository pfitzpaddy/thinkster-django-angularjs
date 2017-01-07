/**
* Dashboard
* @namespace thinkster.dashboard.directives
*/
(function () {
  'use strict';

  angular
    .module('thinkster.dashboard.directives')
    .directive('dashboard', dashboard);

  /**
  * @namespace Posts
  */
  function dashboard() {
    /**
    * @name directive
    * @desc The directive to be returned
    * @memberOf thinkster.dashboard.directives.Dashboard
    */
    var directive = {
      controller: 'DashboardController',
      controllerAs: 'vm',
      restrict: 'E',
      scope: {
        dashboard: '='
      },
      templateUrl: '/static/templates/dashboard/dashboard.html'
    };

    return directive;
  }
})();