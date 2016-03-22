function MainController($scope){
  $scope.name = 'Hello World';
  $scope.email = 'email@email.com';
  $scope.phone = '911';
}

angular
  .module('app')
  .controller('MainController', MainController);
