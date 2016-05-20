(function() {

    angular.module("app")
    .factory("mobilService", mobilService);

    function mobilService(httpService) {
        var service = {
            getAllData: getAllData,
        }

        return service;

        function getAllData() {
          var data = httpService.get("model_mobil.json");
          return data;
        }

    }

})();
