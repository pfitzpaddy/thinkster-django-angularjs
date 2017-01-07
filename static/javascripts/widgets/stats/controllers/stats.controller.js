/**
* StatsController
* @namespace thinkster.widgets.controllers
*/
(function () {
  'use strict';

  angular
    .module('thinkster.widgets.controllers')
    .controller('StatsController', StatsController);

  StatsController.$inject = ['$scope'];

  /**
  * @namespace StatsController
  */
  function StatsController($scope) {
    var vm = this;

    // check the vm scope assignement of posts or whichever

    activate();


    /**
    * @name activate
    * @desc Actions to be performed when this controller is instantiated
    * @memberOf thinkster.posts.controllers.StatsController
    */
    function activate() {

      // this could be tidy-ed up

      // how to fetch the data?

      //
      var data = {}

      // statistics widget default config
      $scope.stats = {
        title: 'Incidents',
        templateUrl: '/static/templates/widgets/stats/template/default.html',
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