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

    activate();


    /**
    * @name activate
    * @desc Actions to be performed when this controller is instantiated
    * @memberOf reporthub.posts.controllers.DashboardController
    */
    function activate() {
     
      // defaults
      vm.dashboard = {};

      // Merge defaults with config
      vm.dashboard = angular.merge({}, vm.dashboard, $scope.layout.dashboard);

    }
  }
})();