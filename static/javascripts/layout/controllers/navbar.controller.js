/**
* NavbarController
* @namespace thinkster.layout.controllers
*/
(function () {
  'use strict';

  angular
    .module('thinkster.layout.controllers')
    .controller('NavbarController', NavbarController);

  NavbarController.$inject = ['$scope', 'Authentication'];

  /**
  * @namespace NavbarController
  */
  function NavbarController($scope, Authentication) {
    var vm = this;

    // check style guide

    vm.isAuthenticated = Authentication.isAuthenticated();

    vm.user = Authentication.getAuthenticatedAccount();

    vm.logout = logout;

    activate();

    /**
    * @name activate
    * @desc Actions to be performed when this controller is instantiated
    * @memberOf thinkster.posts.controllers.DashboardController
    */
    function activate() {

      // (should be in nav controller)
      $('.dropdown-button').dropdown();

      // adds twirl to menu (should be in side-nav controller!)
      $('.rotate').click(function(){
        $(this).toggleClass('down'); 
      });      
      
    }

    /**
    * @name logout
    * @desc Log the user out
    * @memberOf thinkster.layout.controllers.NavbarController
    */
    function logout() {
      Authentication.logout();
    }
  }
})();