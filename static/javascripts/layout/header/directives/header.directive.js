/**
* HeaderController
* @namespace reporthub.layout.header.directives
*/
(function () {
  'use strict';

  angular
    .module('reporthub.layout.header.directives')
    .directive('header', header);

  /**
  * @namespace Posts
  */
  function header() {
    /**
    * @name directive
    * @desc The directive to be returned
    * @memberOf reporthub.layout.header.directives.HeaderController
    */
    var directive = {
      controller: 'HeaderController',
      controllerAs: 'vm',
      restrict: 'E',
      scope: {
        layout: '='
      },
      templateUrl: '/static/templates/layout/header/header.html'
    };

    return directive;
  }
})();