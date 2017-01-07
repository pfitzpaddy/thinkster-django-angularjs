/**
* HeaderController
* @namespace reporthub.layout.header.controllers
*/
(function () {
  'use strict';

  angular
    .module('reporthub.layout.header.controllers')
    .controller('HeaderController', HeaderController);

  HeaderController.$inject = ['$scope', '$timeout', 'Authentication'];

  /**
  * @namespace HeaderController
  */
  function HeaderController($scope, $timeout, Authentication) {
    var vm = this;

    vm.isAuthenticated = Authentication.isAuthenticated();

    vm.user = Authentication.getAuthenticatedAccount();

    activate();

    /**
    * @name activate
    * @desc Actions to be performed when this controller is instantiated
    * @memberOf reporthub.layout.header.controllers.HeaderController
    */
    function activate() {

      // defaults
      vm.header = {
        menu: !$scope.layout.navbar
      }

      // Merge defaults with config
      vm.header = angular.merge({}, vm.header, $scope.layout.header);

    }
  }
})();