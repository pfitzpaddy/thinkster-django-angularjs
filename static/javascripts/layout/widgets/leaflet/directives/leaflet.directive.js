/**
* Stats
* @namespace reporthub.layout.widgets.directives
*/
(function () {
  'use strict';

  angular
    .module('reporthub.layout.widgets.directives')
    .directive('map', map);

  /**
  * @namespace Posts
  */
  function map() {
    /**
    * @name directive
    * @desc The directive to be returned
    * @memberOf reporthub.layout.widgets.directives.Leaflet
    */
    var directive = {
      controller: 'LeafletController',
      controllerAs: 'vm',
      restrict: 'E',
      scope: {
        widget: '='
      },
      templateUrl: '/static/templates/layout/widgets/leaflet/view.html'
    };

    return directive;
  }
})();