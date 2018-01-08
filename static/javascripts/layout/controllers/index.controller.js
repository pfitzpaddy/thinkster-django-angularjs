/**
* IndexController
* @namespace reporthub.layout.controllers
*/
(function () {
  'use strict';

  angular
    .module('reporthub.layout.controllers')
    .controller('IndexController', IndexController);

  IndexController.$inject = ['$scope', '$http', 'Authentication'];

  /**
  * @namespace IndexController
  */
  function IndexController($scope, $http, Authentication) {
    var vm = this;

    activate();


    /**
    * @name activate
    * @desc Actions to be performed when this controller is instantiated
    * @memberOf reporthub.layout.controllers.IndexController
    */
    function activate() {

      // some sort of a getApp config service (layout.service)?
      $http.get('/static/pages/map.json').success(function(data) {
         vm.layout = data.layout;
      });

      // $http.get('/static/pages/map.json').success(function(data) {
      //    vm.layout = data.layout;
      // });

    }

  }
})();