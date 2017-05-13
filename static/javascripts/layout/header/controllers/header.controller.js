/**
* HeaderController
* @namespace reporthub.layout.header.controllers
*/
(function () {
  'use strict';

  angular
    .module('reporthub.layout.header.controllers')
    .controller('HeaderController', HeaderController);

  HeaderController.$inject = ['$scope', '$timeout'];

  /**
  * @namespace HeaderController
  */
  function HeaderController($scope, $timeout, Authentication) {
    var vm = this;

    vm.layout = $scope.layout;

    activate();

    /**
    * @name activate
    * @desc Actions to be performed when this controller is instantiated
    * @memberOf reporthub.layout.header.controllers.HeaderController
    */
    function activate() {

      // defaults
      var header = {
        menu: !$scope.layout.navbar
      }

      // Merge defaults with config
      vm.layout.header = angular.merge({}, header, $scope.layout.header);

    }
  }
})();