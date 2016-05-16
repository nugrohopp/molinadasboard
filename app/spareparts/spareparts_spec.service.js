(function() {

    angular.module("app")
    .factory("sparepartsSpecService", sparepartsSpecService);

    function sparepartsSpecService(httpService) {
        var service = {
            getAllData: getAllData,
        }

        return service;

        function getAllData() {
          var data = httpService.getCSV("spareparts_spec.csv");
          return data;
        }

    }

})();
