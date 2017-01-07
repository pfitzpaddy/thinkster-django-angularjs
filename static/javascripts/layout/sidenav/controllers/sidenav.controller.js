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

    // check style guide && why auth is not being retrieved from $cookies

    vm.isAuthenticated = Authentication.isAuthenticated();

    vm.user = Authentication.getAuthenticatedAccount();

    activate();

    /**
    * @name activate
    * @desc Actions to be performed when this controller is instantiated
    * @memberOf reporthub.layout.sidenav.controllers.SidenavController
    */
    function activate() {

      // defaults
      vm.sidenav = {
        fixed: false,
        options: {
          menuWidth: 300,
          edge: 'left',
          closeOnClick: false,
          draggable: true
        }
      }

      // Merge defaults with config
      vm.sidenav = angular.merge({}, vm.sidenav, $scope.layout.sidenav);

      // $timeout issue 
        //https://www.bennadel.com/blog/2892-typeerror-cannot-read-property-childnodes-of-undefined-in-angularjs.htm
      $timeout(function(){
        
        if (!vm.sidenav.fixed) {
          $('body').css('padding-left','0px');
        }

        // init materialze side-nav
        $('.button-collapse').sideNav(vm.sidenav.options);

        // adds twirl to icons
        $('.rotate').click(function(){
          $(this).toggleClass('down'); 
        });

      },0);

    }
  }
})();