(function () {
    'use sctrict';
//    angular.module('myFirstApp', [])
//            // .controller('myFirstController', function ($scope) {
//            //   $scope.name = "Mahesh";
//            //
//            //   $scope.sayHello = function() {
//            //     return "Hello Courser!";
//            //   };
//            // });
//            .controller('nameCaluculatorController', function ($scope) {
//                $scope.name = "";
//                $scope.totalValue = 0;
//
//                $scope.displayNumeric = function () {
//                    var totalNameValue = caluculateStringValue($scope.name);
//                    $scope.totalValue = totalNameValue;
//                };
//            });
//
//    angular.module('DIApp', [])
//            .controller('DIController', ['$scope', '$filter', DIController]);
//
//    function DIController($scope, $filter) {
//        $scope.DIName = "Mahesh";
//
//        $scope.upper = function () {
//            var upCase = $filter('uppercase');
//            $scope.DIName = upCase($scope.DIName);
//        }
//    }
//
//    function caluculateStringValue(string) {
//        var value = 0;
//        for (var i = 0; i < string.length; i++) {
//            value += string.charCodeAt(i);
//        }
//        return value;
//    }

    angular.module('msgApp', [])
            .controller('MsgController', MsgController)
            .filter("loves", LovesFilter)
            .filter("truth", TruthFilter);

    MsgController.$inject = ['$scope', '$filter', 'lovesFilter', '$timeout'];

    function MsgController($scope, $filter, lovesFilter, $timeout) {
        $scope.name = "Mahesh";
        $scope.state = "hungry";
        $scope.checkCost = 10000;
        $scope.oncecount = 0;
        $scope.counter = 0;

        $scope.sayMessage = function () {
            var msg = "Mahesh Likes to drink beer!";
            return msg;
        };

        $scope.sayLovesMessage = function () {
            var msg = "Mahesh Likes to drink beer!";
            msg = lovesFilter(msg);
            return msg;
        };

        $scope.feedMahesh = function () {
            $scope.state = "fed";
        }

        $scope.noOfWatchers = function () {
            console.log("# of watchers : ", $scope);
        }

        $scope.onceCounter = function () {
            $scope.oncecount = 1;
        }

        $scope.upCounter = function () {
            $timeout(function () {
                $scope.counter++;
                console.log("Counter incremented");
            }, 2000);
        }

//        $scope.upCounter = function () {
//            setTimeout(function () {
//                $scope.$apply(function () {
//                    $scope.counter++;
//                    console.log("Counter incremented");
//                });
//            }, 2000);
//        }

//        $scope.upCounter = function () {
//            setTimeout(function () {
//                $scope.counter++;
//                console.log("Counter incremented");
//                $scope.$digest();
//            }, 2000);
//        }

        $scope.$watch(function () {
            console.log("Digest loop fired!");
        });

//        $scope.$watch("oncecount", function (newValue, oldValue) {
//            console.log("Once Counter Old Value : ", oldValue);
//            console.log("Once Counter New Value : ", newValue);
//        });
//
//        $scope.$watch("counter", function (newValue, oldValue) {
//            console.log("Up Counter Old Value : ", oldValue);
//            console.log("Up Counter New Value : ", newValue);
//        });
    }
    function LovesFilter() {
        return function (input) {
            input = input || "";
            input = input.replace("Likes", "Loves");
            return input;
        }
    }

    function TruthFilter() {
        return function (input, target, replace) {
            input = input || "";
            input = input.replace(target, replace);
            return input;
        }
    }
})();
