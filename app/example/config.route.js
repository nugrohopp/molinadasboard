(function() {
  angular
    .module('app')
    .config(router);

  function router($urlRouterProvider, $stateProvider) {
    $stateProvider.
        state('example', {
          url:'/example/articles',
          templateUrl: 'app/example/exampleArticle.html',
          controller: 'exampleArticle'
        }).
        state('article', {
          url:'/example/articles/:article_id',
          templateUrl: 'app/example/exampleSingleArticle.html',
          controller: 'exampleSingleArticle'
        });
  }
})();
