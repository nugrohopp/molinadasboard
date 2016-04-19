(function() {

  angular
    .module('app')
    .config(router);

  function router($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider.
        state('root', {
          url:'/',
          templateUrl: 'app/mobil/mobil.html',
          controller: 'mobil'
        });
  }
})();
