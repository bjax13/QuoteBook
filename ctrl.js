angular.module('app').controller('ctrl', function ($scope,quoteSrvc) {

  $scope.test = "this works";

  $scope.getQuotes= function () {
    $scope.quotes = quoteSrvc.getQuotes();
  }

  getQuotes();


})
