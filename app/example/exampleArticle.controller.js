(function() {
  angular
    .module('app')
    .controller('exampleArticle', exampleArticle);

  function exampleArticle(exampleService) {
    var expArticle = this;

    exampleService.getAllData().then(
			function(allData) {
				expArticle.datas = allData;
			}
		);
  }
})();
