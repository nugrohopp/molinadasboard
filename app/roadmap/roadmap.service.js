(function() {

    angular.module("app")
    .factory("roadmapService", roadmapService);

    function roadmapService(httpService) {
        var service = {
            getAllData: getAllData,
        }

        return service;

        function getAllData() {
          var data = httpService.get("roadmap.json");
          return data;
        }

    }

})();
