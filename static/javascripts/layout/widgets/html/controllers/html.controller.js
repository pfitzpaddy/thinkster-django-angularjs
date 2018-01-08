/**
* HtmlController
* @namespace reporthub.layout.widgets.controllers
*/
(function () {
  'use strict';

  angular
    .module('reporthub.layout.widgets.controllers')
    .controller('HtmlController', HtmlController);

  HtmlController.$inject = ['$scope'];

  /**
  * @namespace HtmlController
  */
  function HtmlController($scope) {
    var vm = this;

    activate();


    /**
    * @name activate
    * @desc Actions to be performed when this controller is instantiated
    * @memberOf reporthub.layout.widgets.controllers.HtmlController
    */
    function activate() {

      console.log('here')

      // statistics widget default config
      $scope.html = {
        img: 'static/images/chart.png',
        templateUrl: '/static/templates/layout/widgets/html/template/default.html',
      };

      console.log($scope)

      // Merge defaults with config
      // $scope.html = angular.merge({}, $scope.html, $scope.widget.config);

    }
  }
})();