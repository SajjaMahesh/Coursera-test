(function (){
  'use script';
  angular.module('myFirstApp', [])
  // .controller('myFirstController', function ($scope) {
  //   $scope.name = "Mahesh";
  //
  //   $scope.sayHello = function() {
  //     return "Hello Courser!";
  //   };
  // });
  .controller('nameCaluculatorController', function ($scope) {
    $scope.name = "";
    $scope.totalValue = 0;

    $scope.displayNumeric = function() {
      var totalNameValue = caluculateStringValue($scope.name);
      $scope.totalValue = totalNameValue;
    };
  });

  angular.module('DIApp', [])
  .controller('DIController', ['$scope', '$filter', DIController]);

function DIController($scope, $filter) {
  $scope.DIName = "Mahesh";

  $scope.upper = function() {
    var upCase = $filter('uppercase');
    $scope.DIName = upCase($scope.DIName);
  }
}

  function caluculateStringValue(string) {
    var value = 0;
    for (var i = 0; i < string.length; i++) {
      value += string.charCodeAt(i);
    }
    return value;
  }

  angular.module('msgApp', [])
  .controller('MsgController', MsgController);
MsgController.$inject = ['$scope'];
function MsgController($scope) {
  $scope.name = "Mahesh";
  $scope.state = "hungry";

  $scope.sayMessage = function() {
    return "Mahesh has something for you.!";
  };

  $scope.feedMahesh = function() {
    $scope.state = "fed";
  }
};
})();
