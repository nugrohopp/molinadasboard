(function() {

    angular.module("app")
    .factory("exampleService", exampleService);

    function exampleService(httpService) {
        var service = {
            getAllData: getAllData,
        }

        return service;

        function getAllData() {
          var data = httpService.getCSV("example.csv");
          return data;
        }

    }

})();
