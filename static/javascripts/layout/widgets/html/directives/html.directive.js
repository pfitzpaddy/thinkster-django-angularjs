/**
* Html
* @namespace reporthub.layout.widgets.directives
*/
(function () {
  'use strict';

  angular
    .module('reporthub.layout.widgets.directives')
    .directive('html', html);

  /**
  * @namespace Posts
  */
  function html() {
    /**
    * @name directive
    * @desc The directive to be returned
    * @memberOf reporthub.layout.widgets.directives.Html
    */
    var directive = {
      controller: 'HtmlController',
      controllerAs: 'vm',
      restrict: 'E',
      scope: {
        widget: '='
      },
      templateUrl: '/static/templates/layout/widgets/html/view.html'
    };

    return directive;
  }
})();