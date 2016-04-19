(function() {

  angular
    .module('app')
    .config(router);

  function router($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider.
        state('roadmap', {
          url:'/roadmap',
          templateUrl: 'app/roadmap/roadmap.html',
          controller: 'roadmap'
        });
  }
})();
