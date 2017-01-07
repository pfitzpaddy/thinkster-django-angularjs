/**
* StatsController
* @namespace reporthub.layout.widgets.controllers
*/
(function () {
  'use strict';

  angular
    .module('reporthub.layout.widgets.controllers')
    .controller('StatsController', StatsController);

  StatsController.$inject = ['$scope'];

  /**
  * @namespace StatsController
  */
  function StatsController($scope) {
    var vm = this;

    activate();


    /**
    * @name activate
    * @desc Actions to be performed when this controller is instantiated
    * @memberOf reporthub.layout.widgets.controllers.StatsController
    */
    function activate() {

      // this could be tidy-ed up massively

      // how to fetch the data?

      //
      var data = {}

      // statistics widget default config
      $scope.stats = {
        title: 'Incidents',
        templateUrl: '/static/templates/layout/widgets/stats/template/default.html',
        display: {
          iconClass: 'grey-text text-lighten-1',
          filter: 'number',
          duration: 1
        },
        data: data
      };

      // Merge defaults with config
      $scope.stats = angular.merge({}, $scope.stats, $scope.widget.config);

    }
  }
})();