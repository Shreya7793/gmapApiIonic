angular.module('gmapassignment')

.controller('generateRouteCtrl', function($scope,$http) {

/***api starts****/
	 // $http({
  //   method: 'POST',
  //   url: 'https://api.flightmap.io/api/v1/vrp',
  //   headers: {
  // "Authorization": "772ea600-78ad-11e6-a56b-0bff586a75e5",
  // "Content-Type": "application/json; charset=utf-8"
  // },
  //  rejectUnauthorized: false,
  //  body: '{"service":[{"id":"8627","lat":30.7274460947,"lng":76.797384358943,"name":"8627","duration":5}],"fleet":[{"id":1,"lat":30.7188978,"lng":76.8102981,"latEnd":30.7188978,"lngEnd":76.8102981,"returnToStart":0}],"maxVisits":6,"polylines":false,"distanceCalculation":false,"speed":40,"decideFleetSize":1}'
  // }).then(function(response){
  //         console.log("successfully"+response.data);
  //   }, function(error){
  //      console.log(error);
  //      alert(error.data);
  //   });
 /***api ends****/
    // RouteService.routeserv().then(function(response){
    //    console.log(response.data)
  
 
$scope.initialise=function() {
    var myLatlng = new google.maps.LatLng(51.65905179951626, 7.3835928124999555);
    var myOptions = {
        zoom: 8,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(document.getElementById("map"), myOptions);
        
    var decodedPath = google.maps.geometry.encoding.decodePath('}~kvHmzrr@ba\\hnc@jiu@r{Zqx~@hjp@pwEhnc@zhu@zflAbxn@fhjBvqHroaAgcnAp}gAeahAtqGkngAinc@_h|@r{Zad\\y|_D}_y@swg@ysg@}llBpoZqa{@xrw@~eBaaX}{uAero@uqGadY}nr@`dYs_NquNgbjAf{l@|yh@bfc@}nr@z}q@i|i@zgz@r{ZhjFr}gApob@ff}@laIsen@dgYhdPvbIren@'); 
    var decodedLevels = decodeLevels("BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB");

    // var decodedPath = google.maps.geometry.encoding.decodePath('gn}qy@s}coqCbe@gh@vBkHRwGwrFzuFc[zYoKzO{EnFRz@RvBSnFcBfEcBvBkCbB_DRgESg@SsSnKkoCjjC{lCviCcLnK{EjHf@jCSvGwBbGsDvBsDz@{Eg@oA{@cL~HwLzJSvL{}BzsBf|@nvAzTcV~CsDjCoAjMcBjMgJrDkCbBRfm@jMrNjCjCvBrNfTnFnKrIzOv[wV~CkC'); 
    //  var decodedLevels = decodeLevels("BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB");


    var setRegion = new google.maps.Polyline({
        path: decodedPath,
        levels: decodedLevels,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
        map: map
    });
}

function decodeLevels(encodedLevelsString) {
    var decodedLevels = [];

    for (var i = 0; i < encodedLevelsString.length; ++i) {
        var level = encodedLevelsString.charCodeAt(i) - 63;
        decodedLevels.push(level);
    }
    return decodedLevels;
}


 google.maps.event.addDomListener(window, 'load', $scope.initialise());
    
})