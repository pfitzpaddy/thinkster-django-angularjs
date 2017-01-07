/**
* Stats
* @namespace thinkster.widgets.directives
*/
(function () {
  'use strict';

  angular
    .module('thinkster.widgets.directives')
    .directive('stats', stats);

  /**
  * @namespace Posts
  */
  function stats() {
    /**
    * @name directive
    * @desc The directive to be returned
    * @memberOf thinkster.widgets.directives.Stats
    */
    var directive = {
      controller: 'StatsController',
      controllerAs: 'vm',
      restrict: 'E',
      scope: {
        widget: '='
      },
      templateUrl: '/static/templates/widgets/stats/view.html'
    };

    return directive;
  }
})();