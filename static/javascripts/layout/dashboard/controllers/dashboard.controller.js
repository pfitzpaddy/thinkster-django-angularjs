/**
* DashboardController
* @namespace reporthub.layout.dashboard.controllers
*/
(function () {
  'use strict';

  angular
    .module('reporthub.layout.dashboard.controllers')
    .controller('DashboardController', DashboardController);

  DashboardController.$inject = ['$scope'];

  /**
  * @namespace DashboardController
  */
  function DashboardController($scope) {
    var vm = this;

    vm.layout = $scope.layout;

    activate();


    /**
    * @name activate
    * @desc Actions to be performed when this controller is instantiated
    * @memberOf reporthub.posts.controllers.DashboardController
    */
    function activate() {
     
      // defaults
      var dashboard = {};

      // Merge defaults with config
      vm.layout.dashboard = angular.merge({}, dashboard, $scope.layout.dashboard);

    }
  }
})();