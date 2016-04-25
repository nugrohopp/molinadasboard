(function() {
  angular
    .module('app')
    .controller('exampleSingleArticle', exampleSingleArticle);

  function exampleSingleArticle($stateParams,exampleService) {
    var expSArticle = this;
    expSArticle.articleID = $stateParams.article_id;

    exampleService.getAllData().then(
			function(allData) {
				expSArticle.datas = allData;
			}
		);
    
  }
})();
