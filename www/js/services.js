angular.module('starter.services', [])

.factory('RouteService', function($http, $rootScope, $q) {
   var services = {};
   services.routeserv = function() {
   var req = {
method: 'POST',
url: 'https://api.flightmap.io/api/v1/vrp',
headers: {
  "Authorization": "772ea600-78ad-11e6-a56b-0bff586a75e5",
  "Content-Type": "application/json; charset=utf-8"
  },
   rejectUnauthorized: false,
   body: '{"service":[{"id":"8627","lat":30.7274460947,"lng":76.797384358943,"name":"8627","duration":5}],"fleet":[{"id":1,"lat":30.7188978,"lng":76.8102981,"latEnd":30.7188978,"lngEnd":76.8102981,"returnToStart":0}],"maxVisits":6,"polylines":false,"distanceCalculation":false,"speed":40,"decideFleetSize":1}'
     }
   var deferred = $q.defer();
     $http(req).then(function(data) {
       deferred.resolve(data);
    })
    return deferred.promise;
   }
   return services;
});
