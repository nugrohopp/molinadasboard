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
          controller: 'mobil',
          onEnter: function ($state, $stateParams) {
            console.log($stateParams.mobil_id);
            if (!$stateParams.mobil_id) {
              $stateParams.mobil_id = 1;
            }
          },
    });
  }
})();
