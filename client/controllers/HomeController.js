myApp.controller('HomeController', function($scope, Send) {
  $scope.sendText = function(){
    console.log($scope.message);
    Send.text($scope.message);
  };
});