/**
* IndexController
* @namespace thinkster.layout.controllers
*/
(function () {
  'use strict';

  angular
    .module('thinkster.layout.controllers')
    .controller('IndexController', IndexController);

  IndexController.$inject = ['$scope', 'Authentication'];

  /**
  * @namespace IndexController
  */
  function IndexController($scope, Authentication, Posts, Snackbar) {
    var vm = this;

    vm.isAuthenticated = Authentication.isAuthenticated();
    
    vm.dashboard = {}

    activate();

    /**
    * @name activate
    * @desc Actions to be performed when this controller is instantiated
    * @memberOf thinkster.layout.controllers.IndexController
    */
    function activate() {

      vm.dashboard.title = 'HELLO WORLD!';
      
      vm.dashboard.rows = [{
        columns: [{
          css: 'col s12 m4',
          widget: {
            type: 'stats',
            style: 'text-align: center;',
            css: 'card-panel stats-card white grey-text text-darken-2', // 'card' with 20px padding as default & 'white card-panel grey-text text-darken-2' should be default
            config: {
              title: 'Figure A',
              data: { value: 1126 }
            }
          }
        },{
          css: 'col s12 m4',
          widget: {
            type: 'stats',
            style: 'text-align: center;',
            css: 'card-panel stats-card white grey-text text-darken-2', // 'card' with 20px padding as default & 'white card-panel grey-text text-darken-2' should be default
            config: {
              title: 'Figure B',
              data: { value: 1033 }
            }
          }
        },{
          css: 'col s12 m4',
          widget: {
            type: 'stats',
            style: 'text-align: center;',
            css: 'card-panel stats-card white grey-text text-darken-2', // 'card' with 20px padding as default & 'white card-panel grey-text text-darken-2' should be default
            config: {
              title: 'Figure C',
              data: { value: 726 }
            }
          }
        }]
      }]

    }
  }
})();