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

      // some sort of a getApp config service (layout.service)?

      vm.dashboard.title = 'HELLO WORLD!';      

      // vm.dashboard.rows = [{
      //   columns: [{
      //     css: 'col s12 m3',
      //     widget: {
      //       type: 'stats',
      //       style: 'text-align: center;',
      //       css: 'card-panel stats-card white grey-text text-darken-2', // 'card' with 20px padding as default & 'white card-panel grey-text text-darken-2' should be default
      //       config: {
      //         title: 'Figure A',
      //         data: { value: 1126 }
      //       }
      //     }
      //   },{
      //     css: 'col s12 m3',
      //     widget: {
      //       type: 'stats',
      //       style: 'text-align: center;',
      //       css: 'card-panel stats-card white grey-text text-darken-2', // 'card' with 20px padding as default & 'white card-panel grey-text text-darken-2' should be default
      //       config: {
      //         title: 'Figure B',
      //         data: { value: 1033 }
      //       }
      //     }
      //   },{
      //     css: 'col s12 m3',
      //     widget: {
      //       type: 'stats',
      //       style: 'text-align: center;',
      //       css: 'card-panel stats-card white grey-text text-darken-2', // 'card' with 20px padding as default & 'white card-panel grey-text text-darken-2' should be default
      //       config: {
      //         title: 'Figure C',
      //         data: { value: 726 }
      //       }
      //     }
      //   },{
      //     css: 'col s12 m3',
      //     widget: {
      //       type: 'stats',
      //       style: 'text-align: center;',
      //       css: 'card-panel stats-card white grey-text text-darken-2', // 'card' with 20px padding as default & 'white card-panel grey-text text-darken-2' should be default
      //       config: {
      //         title: 'Figure D',
      //         data: { value: 1726 }
      //       }
      //     }
      //   }]
      // }]

      vm.dashboard.rows = [{
        columns: [{
          css: 's12 m12 l12',
          widget: {
            type: 'map',
            style: 'padding:0px; margin-top: 0px !important;',
            css: 'card-panel',
            config: {
              height: '800px;',
              layers: {
                baselayers: {
                  osm: {
                    name: 'Mapbox',
                    type: 'xyz',
                    url: 'https://b.tiles.mapbox.com/v4/aj.um7z9lus/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZml0enBhZGR5IiwiYSI6ImNpZW1vcXZiaTAwMXBzdGtrYmp0cDlkdnEifQ.NCI7rTR3PvN4iPZpt6hgKA',
                    // url: 'https://api.tiles.mapbox.com/v4/fitzpaddy.b207f20f/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZml0enBhZGR5IiwiYSI6ImNpZW1vcXZiaTAwMXBzdGtrYmp0cDlkdnEifQ.NCI7rTR3PvN4iPZpt6hgKA',
                    layerOptions: {
                      continuousWorld: true
                    }
                  }
                }
              }
            }
          }
        }]
      }]

    }
  }
})();