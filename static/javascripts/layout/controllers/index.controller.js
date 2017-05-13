/**
* IndexController
* @namespace reporthub.layout.controllers
*/
(function () {
  'use strict';

  angular
    .module('reporthub.layout.controllers')
    .controller('IndexController', IndexController);

  IndexController.$inject = ['$scope', 'Authentication'];

  /**
  * @namespace IndexController
  */
  function IndexController($scope, Authentication) {
    var vm = this;

    activate();


    /**
    * @name activate
    * @desc Actions to be performed when this controller is instantiated
    * @memberOf reporthub.layout.controllers.IndexController
    */
    function activate() {

      // some sort of a getApp config service (layout.service)?
      vm.layout = {
        account: Authentication.getAuthenticatedAccount(),
        container: true,
        sidenav: {
          fixed: true
        },
        header: {
          title: 'HELLO WORLD!'       
        },
        dashboard: {}
      }

      // stats
      
      vm.layout.dashboard = {
        rows: [{
          columns: [{
            css: 'col s12 m3',
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
            css: 'col s12 m3',
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
            css: 'col s12 m3',
            widget: {
              type: 'stats',
              style: 'text-align: center;',
              css: 'card-panel stats-card white grey-text text-darken-2', // 'card' with 20px padding as default & 'white card-panel grey-text text-darken-2' should be default
              config: {
                title: 'Figure C',
                data: { value: 726 }
              }
            }
          },{
            css: 'col s12 m3',
            widget: {
              type: 'stats',
              style: 'text-align: center;',
              css: 'card-panel stats-card white grey-text text-darken-2', // 'card' with 20px padding as default & 'white card-panel grey-text text-darken-2' should be default
              config: {
                title: 'Figure D',
                data: { value: 1726 }
              }
            }
          }]
        }]
      }

      // map

      // vm.layout = {
      //   account: Authentication.getAuthenticatedAccount(),
      //   navbar: {
      //     logo: 'iMMAP'
      //   },
      //   sidenav: {},
      //   dashboard: {}
      // }

      // vm.layout.dashboard = {
      //   rows: [{
      //     columns: [{
      //       css: 's12 m12 l12',
      //       widget: {
      //         type: 'map',
      //         style: 'padding:0px; margin-top: 0px !important;',
      //         css: 'card-panel',
      //         config: {
      //           // height: 400
      //         }
      //       }
      //     }]
      //   }]
      // }

    }

  }
})();