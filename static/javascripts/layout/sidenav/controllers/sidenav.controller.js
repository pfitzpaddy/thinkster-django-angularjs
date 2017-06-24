/**
* SidenavController
* @namespace reporthub.layout.sidenav.controllers
*/
(function () {
  'use strict';

  angular
    .module('reporthub.layout.sidenav.controllers')
    .controller('SidenavController', SidenavController);

  SidenavController.$inject = ['$scope', '$timeout', 'Authentication'];

  /**
  * @namespace SidenavController
  */
  function SidenavController($scope, $timeout, Authentication) {
    var vm = this;

    vm.layout = $scope.layout

    activate();


    /**
    * @name activate
    * @desc Actions to be performed when this controller is instantiated
    * @memberOf reporthub.layout.sidenav.controllers.SidenavController
    */
    function activate() {

      // defaults
      var sidenav = {
        fixed: false,
        options: {
          menuWidth: 300,
          edge: 'left',
          closeOnClick: false,
          draggable: true
        }
      }

      // Merge defaults with config
      vm.layout.sidenav = angular.merge({}, sidenav, $scope.layout.sidenav);

      // $timeout issue https://www.bennadel.com/blog/2892-typeerror-cannot-read-property-childnodes-of-undefined-in-angularjs.htm
      $timeout(function(){
        // adds twirl to icons
        $('.rotate').click(function(){
          $(this).toggleClass('down'); 
        });
        if (!vm.layout.sidenav.fixed) {
          $('body').css('padding-left','0px');
        }
        // init materialze side-nav
        $('.button-collapse').sideNav(vm.layout.sidenav.options);
      },0);

    }
  }
})();