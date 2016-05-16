(function() {

    angular.module("app")
    .factory("sparepartsService", sparepartsService);

    function sparepartsService(httpService) {
        var service = {
            getAllData: getAllData,
        }

        return service;

        function getAllData() {
          var data = httpService.getCSV("spareparts.csv");
          return data;
        }

    }

})();
