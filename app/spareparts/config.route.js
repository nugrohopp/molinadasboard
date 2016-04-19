(function() {

  angular
    .module('app')
    .config(router);

  function router($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider.
        state('spareparts', {
          url:'/spareparts',
          templateUrl: 'app/spareparts/spareparts.html',
          controller: 'spareparts'
        });
  }
})();
