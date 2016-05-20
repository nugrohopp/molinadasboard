(function() {
  angular
    .module('app')
    .controller('roadmap', roadmap);

  function roadmap(roadmapService) {
    var roadmap = this;
    roadmapService.getAllData().then(
        function(allData) {
          roadmap.roadmapData = allData;
        }
    );
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
