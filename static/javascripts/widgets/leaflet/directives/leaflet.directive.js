/**
* Stats
* @namespace thinkster.widgets.directives
*/
(function () {
  'use strict';

  angular
    .module('thinkster.widgets.directives')
    .directive('map', map);

  /**
  * @namespace Posts
  */
  function map() {
    /**
    * @name directive
    * @desc The directive to be returned
    * @memberOf thinkster.widgets.directives.Leaflet
    */
    var directive = {
      controller: 'LeafletController',
      controllerAs: 'vm',
      restrict: 'E',
      scope: {
        widget: '='
      },
      templateUrl: '/static/templates/widgets/leaflet/view.html'
    };

    return directive;
  }
})();