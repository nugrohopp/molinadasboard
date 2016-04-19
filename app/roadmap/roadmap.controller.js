(function() {
  angular
    .module('app')
    .controller('roadmap', roadmap);

  function roadmap() {
    var r = this;
    $(document).ready(function(){
      $('.icon.tahun1').popup({
        popup: '.tahundeskripsi',
        on:'click',
      });
      $('.icon.tahun2').popup({
        popup: '.tahundeskripsi',
        on:'click',
      });
      $('.icon.tahun3').popup({
        popup: '.tahundeskripsi',
        on:'click',
      });
      $('.icon.tahun4').popup({
        popup: '.tahundeskripsi',
        on:'click',
      });
      $('.icon.tahun5').popup({
        popup: '.tahundeskripsi',
        on:'click',
      });
    });
  }
})();
