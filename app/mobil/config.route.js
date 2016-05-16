(function() {

  angular
    .module('app')
    .config(router);

  function router($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider.
        state('mobil', {
          url:'/mobil/:mobil_id',
          templateUrl: 'app/mobil/mobil.html',
          controller: 'mobil'
        });
  }
})();
