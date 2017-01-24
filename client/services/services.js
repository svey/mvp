myApp.factory('Send', ['$http', function($http) {

  var text = function(message) {

    return $http({
      method: 'POST',
      url: '/sms', 
      data: message
    })
    .then(function(response, error) {
      console.log('response', response);
      if(error) {
        console.log('error', error);
        return;
      }
      return 'Message Sent!';
    });
  };

  return {
    text: text
  };

}]);