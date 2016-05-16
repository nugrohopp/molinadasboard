(function() {

    angular.module("app")
    .factory("mobilService", mobilService);

    function mobilService(httpService) {
        var service = {
            getAllData: getAllData,
        }

        return service;

        function getAllData() {
          var data = httpService.getCSV("mobil.csv");
          return data;
        }

    }

})();
