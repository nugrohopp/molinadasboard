(function() {
  angular
    .module('app')
    .controller('mobil', mobil);

  function mobil($stateParams,mobilService,sparepartsService) {
    var mobil = this;
    var folder = "car_";
    mobil.show3d = false;
    mobil.mobilID = $stateParams.mobil_id;
    mobil.previous = parseInt(mobil.mobilID) - 1;
    mobil.next = parseInt(mobil.mobilID) + 1;

    mobilService.getAllData().then(
			function(allData) {
				mobil.mobilData = allData;
        folder = mobil.mobilData[mobil.mobilID - 1].model
        mobil.url3d = "assets/3d/" + folder + "/webgl.html";
        $(document).ready(function(){
          var mobilmuter = $('.mobilmuter').ThreeSixty({
                totalFrames: 45,
                endFrame: 45,
                currentFrame: 1,
                imgList: '.threesixty_images',
                progress: '.spinner',
                imagePath:'assets/car/',
                filePrefix: folder,
                ext: '.jpg',
                height: window.innerHeight*(45/100),
                width: window.innerWidth*(50/100),
                navigation: true,
                disableSpin: false
            });
        });
        sparepartsService.getAllData().then(
      			function(allData) {
      				mobil.sparepartsData = allData;
      			}
      	);
			}
		);
  }
})();
