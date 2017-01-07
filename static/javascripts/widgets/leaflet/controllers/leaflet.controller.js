/**
* LeafletController
* @namespace thinkster.widgets.controllers
*/
(function () {
  'use strict';

  angular
    .module('thinkster.widgets.controllers')
    .controller('LeafletController', LeafletController);

  LeafletController.$inject = ['$scope'];

  /**
  * @namespace LeafletController
  */
  function LeafletController($scope) {
    var vm = this;

    // check the vm scope assignement of posts or whichever

    vm.center = {};

    activate();


    /**
    * @name activate
    * @desc Actions to be performed when this controller is instantiated
    * @memberOf thinkster.posts.controllers.LeafletController
    */
    function activate() {

    // if full height
    vm.height = $(window).height() - $('nav').height();

    // if full width
    // full full width
    $('body').css('padding-left','0px');

      vm.center = { lat: 34.5, lng: 66, zoom: 6 };

      vm.layers = {
        baselayers: {
          osm: {
            name: 'Mapbox',
            type: 'xyz',
            url: 'https://b.tiles.mapbox.com/v4/aj.um7z9lus/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZml0enBhZGR5IiwiYSI6ImNpZW1vcXZiaTAwMXBzdGtrYmp0cDlkdnEifQ.NCI7rTR3PvN4iPZpt6hgKA',
            layerOptions: {
              continuousWorld: true
            }
          }
        }
      }

    }
  }
})();