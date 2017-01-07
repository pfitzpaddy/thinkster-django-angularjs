/**
* DashboardController
* @namespace thinkster.dashboard.controllers
*/
(function () {
  'use strict';

  angular
    .module('thinkster.dashboard.controllers')
    .controller('DashboardController', DashboardController);

  DashboardController.$inject = ['$scope'];

  /**
  * @namespace DashboardController
  */
  function DashboardController($scope) {
    var vm = this;

    // layout settings (from config)
    vm.settings = {}

    activate();


    /**
    * @name activate
    * @desc Actions to be performed when this controller is instantiated
    * @memberOf thinkster.posts.controllers.DashboardController
    */
    function activate() {

      // config options
      var options = {
        menuWidth: 300,
        edge: 'left',
        closeOnClick: false,
        draggable: true
      }

      // init materialze side-nav
      $('.button-collapse').sideNav(options);
      
    }
  }
})();