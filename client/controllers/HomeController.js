myApp.controller('HomeController', function($scope, Send) {
  $scope.sendText = function(){
    console.log('controller', $scope.message);
    Send.text($scope.message);
    $scope.message = '';
  };
});