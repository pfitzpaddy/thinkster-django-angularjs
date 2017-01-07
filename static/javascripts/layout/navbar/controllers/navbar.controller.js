/**
* NavbarController
* @namespace reporthub.layout.navbar.controllers
*/
(function () {
  'use strict';

  angular
    .module('reporthub.layout.navbar.controllers')
    .controller('NavbarController', NavbarController);

  NavbarController.$inject = ['$scope', '$timeout', 'Authentication'];

  /**
  * @namespace NavbarController
  */
  function NavbarController($scope, $timeout, Authentication) {
    var vm = this;

    // check style guide && why auth is not being retrieved from $cookies

    vm.isAuthenticated = Authentication.isAuthenticated();

    vm.user = Authentication.getAuthenticatedAccount();

    vm.logout = logout;

    activate();

    /**
    * @name activate
    * @desc Actions to be performed when this controller is instantiated
    * @memberOf reporthub.layout.navbar.controllers.NavbarController
    */
    function activate() {

      // defaults
      vm.navbar = {
        dropdown: true
      }

      // Merge defaults with config
      vm.navbar = angular.merge({}, vm.navbar, $scope.layout.navbar);

      // $timeout issue 
        //https://www.bennadel.com/blog/2892-typeerror-cannot-read-property-childnodes-of-undefined-in-angularjs.htm
      $timeout(function(){ 
        if (vm.navbar.dropdown) {
          $('.dropdown-button').dropdown(); 
        }
      },0);

    }

    /**
    * @name logout
    * @desc Log the user out
    * @memberOf reporthub.layout.navbar.controllers.NavbarController
    */
    function logout() {
      Authentication.logout();
    }
  }
})();