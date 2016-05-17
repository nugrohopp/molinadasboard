(function() {
  angular
    .module('app')
    .controller('spareparts', spareparts);

  function spareparts($stateParams,sparepartsService,sparepartsSpecService) {
    var spareparts = this;

    spareparts.sparepartsID = $stateParams.spareparts_id;
    spareparts.previous = parseInt(spareparts.sparepartsID) - 1;
    spareparts.next = parseInt(spareparts.sparepartsID) + 1;

    sparepartsService.getAllData().then(
			function(allData) {
				spareparts.sparepartsData = allData;
			}
		);

    // $(document).ready(function(){
    //   var mobilmuter = $('.mobilmuter').ThreeSixty({
    //         totalFrames: 52, // Total no. of image you have for 360 slider
    //         endFrame: 30, // end frame for the auto spin animation
    //         currentFrame: 1, // This the start frame for auto spin
    //         imgList: '.threesixty_images', // selector for image list
    //         progress: '.spinner', // selector to show the loading progress
    //         imagePath:'assets/spareparts/', // path of the image assets
    //         filePrefix: 'mesinJalak_', // file prefix if any
    //         ext: '.png', // extention for the assets
    //         height: 300,
    //         width: 820,
    //         navigation: true,
    //         disableSpin: false // Default false
    //     });
    //   });
  }
})();
