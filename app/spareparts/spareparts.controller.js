(function() {
  angular
    .module('app')
    .controller('spareparts', spareparts);

  function spareparts() {
    var s = this;
    $(document).ready(function(){
      var mobilmuter = $('.mobilmuter').ThreeSixty({
            totalFrames: 52, // Total no. of image you have for 360 slider
            endFrame: 30, // end frame for the auto spin animation
            currentFrame: 1, // This the start frame for auto spin
            imgList: '.threesixty_images', // selector for image list
            progress: '.spinner', // selector to show the loading progress
            imagePath:'assets/car/', // path of the image assets
            filePrefix: '', // file prefix if any
            ext: '.png', // extention for the assets
            height: 420,
            width: 977,
            navigation: true,
            disableSpin: false // Default false
        });
      });
  }
})();
