/**
* NavbarController
* @namespace reporthub.layout.navbar.controllers
*/
(function () {
  'use strict';

  angular
    .module('reporthub.layout.navbar.controllers')
    .controller('NavbarController', NavbarController);

  NavbarController.$inject = ['$scope', '$timeout'];

  /**
  * @namespace NavbarController
  */
  function NavbarController($scope, $timeout) {
    var vm = this;

    vm.layout = $scope.layout;

    vm.logout = logout;

    activate();

    /**
    * @name activate
    * @desc Actions to be performed when this controller is instantiated
    * @memberOf reporthub.layout.navbar.controllers.NavbarController
    */
    function activate() {

      // defaults
      var navbar = {
        logo: 'iMMAP',
        dropdown: true
      }

      // Merge defaults with config
      vm.layout.navbar = angular.merge({}, navbar, $scope.layout.navbar);

      // $timeout issue https://www.bennadel.com/blog/2892-typeerror-cannot-read-property-childnodes-of-undefined-in-angularjs.htm
      $timeout(function(){ 
        // adds twirl to icons
        $('.rotate').click(function(){
          $(this).toggleClass('down'); 
        });
        // activate dropdown
        if (vm.layout.navbar.dropdown) {
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