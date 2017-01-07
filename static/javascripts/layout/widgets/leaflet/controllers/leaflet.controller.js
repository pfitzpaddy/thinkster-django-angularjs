/**
* LeafletController
* @namespace reporthub.layout.widgets.controllers
*/
(function () {
  'use strict';

  angular
    .module('reporthub.layout.widgets.controllers')
    .controller('LeafletController', LeafletController);

  LeafletController.$inject = ['$scope'];

  /**
  * @namespace LeafletController
  */
  function LeafletController($scope) {
    var vm = this;

    vm.leaflet = {};

    activate();


    /**
    * @name activate
    * @desc Actions to be performed when this controller is instantiated
    * @memberOf reporthub.layout.widgets.controllers.LeafletController
    */
    function activate() {

      // mapbox osm
      var tileLayer = 'https://b.tiles.mapbox.com/v4/aj.um7z9lus/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZml0enBhZGR5IiwiYSI6ImNpZW1vcXZiaTAwMXBzdGtrYmp0cDlkdnEifQ.NCI7rTR3PvN4iPZpt6hgKA';

      vm.leaflet = {
        width: '100%',
        height: $(window).height() - $('nav').height(),
        defaults: {
          tileLayer: tileLayer,
          center: { lat: 34.5, lng: 66, zoom: 6 },
          controls: {
            layers: {}
          },
          map: {
            fullscreenControl: true,
            scrollWheelZoom: false,
            attributionControl: false
          }
        },
        layers: {
          baselayers: {
            osm: {
              name: 'Mapbox',
              type: 'xyz',
              url: tileLayer,
              layerOptions: {
                continuousWorld: true
              }
            }
          }
        }        
      }

      // Merge defaults with config
      vm.leaflet = angular.merge({}, vm.leaflet, $scope.widget.config);

      init();

      
      /**
      * @name init
      * @desc Actions to be performed when this widget is instantiated
      * @memberOf reporthub.layout.widgets.controllers.LeafletController
      */
      function init() {

      }

    }
  }
})();