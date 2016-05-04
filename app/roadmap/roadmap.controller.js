(function() {
  angular
    .module('app')
    .controller('roadmap', roadmap);

  function roadmap() {
    var r = this;
    $(document).ready(function(){
      $(".timeline-item").hover(function () {
          $(".timeline-item").removeClass("active");
          $(this).toggleClass("active");
          $(this).prev(".timeline-item").toggleClass("close");
          $(this).next(".timeline-item").toggleClass("close");
      });
    });
  }
})();
