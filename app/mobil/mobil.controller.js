(function() {
  angular
    .module('app')
    .controller('mobil', mobil);

  function mobil($stateParams,mobilService,sparepartsService) {
    var mobil = this;

    mobil.mobilID = $stateParams.mobil_id;


    mobilService.getAllData().then(
			function(allData) {
				mobil.mobilData = allData;
			}
		);

    sparepartsService.getAllData().then(
			function(allData) {
				mobil.sparepartsData = allData;
			}
		);

  }
})();
