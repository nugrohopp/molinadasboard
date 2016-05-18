(function() {
  angular
    .module('app')
    .controller('mobil', mobil);

  function mobil($stateParams,mobilService,sparepartsService) {
    var mobil = this;
    var folder = "car_";
    mobil.mobilID = $stateParams.mobil_id;
    mobil.previous = parseInt(mobil.mobilID) - 1;
    mobil.next = parseInt(mobil.mobilID) + 1;

    mobilService.getAllData().then(
			function(allData) {
				mobil.mobilData = allData;
        folder = mobil.mobilData[mobil.mobilID - 1].model
        $(document).ready(function(){
          var mobilmuter = $('.mobilmuter').ThreeSixty({
                totalFrames: 45, // Total no. of image you have for 360 slider
                endFrame: 45, // end frame for the auto spin animation
                currentFrame: 1, // This the start frame for auto spin
                imgList: '.threesixty_images', // selector for image list
                progress: '.spinner', // selector to show the loading progress
                imagePath:'assets/car/'  , // path of the image assets
                filePrefix: folder, // file prefix if any
                ext: '.jpg', // extention for the assets
                height: 400,
                width: 820,
                navigation: true,
                disableSpin: false // Default false
            });
            $('.ui.primary.button.show3d').click(function() {
                $('.ui.modal').modal('show');
            });

        });
        sparepartsService.getAllData().then(
      			function(allData) {
      				mobil.sparepartsData = allData;
      			}
      	);
        // mobil.detailSpareparts = function(id_sparepart) {
        //   console.log(id_sparepart);
        // }
			}
		);
  }
})();
