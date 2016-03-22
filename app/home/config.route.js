(function() {

  angular
    .module('app')
    .config(router);

  function router($locationProvider, $routeProvider) {
    $routeProvider.
        when('/home', {
          templateUrl: 'app/home/home.html'
        }).
        otherwise({
          redirectTo: '/'
        });
  }
})();
