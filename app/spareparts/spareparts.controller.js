(function() {
  angular
    .module('app')
    .controller('spareparts', spareparts);

  function spareparts($stateParams,sparepartsService,mobilService) {
    var spareparts = this;
    var folder = "bms";
    spareparts.sparepartsID = $stateParams.spareparts_id;
    spareparts.previous = parseInt(spareparts.sparepartsID) - 1;
    spareparts.next = parseInt(spareparts.sparepartsID) + 1;

    sparepartsService.getAllData().then(
			function(allData) {
				spareparts.sparepartsData = allData;
        folder = spareparts.sparepartsData[spareparts.sparepartsID - 1].pic;
        $(document).ready(function(){
          var mobilmuter = $('.sparepartsmuter').ThreeSixty({
                totalFrames: 15,
                endFrame: 15,
                currentFrame: 1,
                imgList: '.threesixty_images',
                progress: '.spinner',
                imagePath:'assets/komponen/'+folder+'/',
                filePrefix: '',
                ext: '.jpg',
                height: window.innerHeight*(38/100),
                width: window.innerWidth*(69/100),
                navigation: true,
                disableSpin: true
          });
        });
        mobilService.getAllData().then(
      			function(allData) {
      				spareparts.mobilData = allData;
      			}
      	);
			}
		);
  }
})();
