(function () {
  'use strict';

  angular
    .module('clientAngularJs')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })

      .state('user', {
        url: '/users',
        templateUrl: 'app/user/show.html',
        controller: 'UserController',
        controllerAs: 'show'
      })
    ;
    $urlRouterProvider.otherwise('/');
  }

})();
