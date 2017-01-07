/**
* Stats
* @namespace reporthub.layout.widgets.directives
*/
(function () {
  'use strict';

  angular
    .module('reporthub.layout.widgets.directives')
    .directive('stats', stats);

  /**
  * @namespace Posts
  */
  function stats() {
    /**
    * @name directive
    * @desc The directive to be returned
    * @memberOf reporthub.layout.widgets.directives.Stats
    */
    var directive = {
      controller: 'StatsController',
      controllerAs: 'vm',
      restrict: 'E',
      scope: {
        widget: '='
      },
      templateUrl: '/static/templates/layout/widgets/stats/view.html'
    };

    return directive;
  }
})();