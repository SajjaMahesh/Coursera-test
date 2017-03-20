(function () {
    'use script';

    angular.module('LunchCheck', [])
            .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope, $filter) {
        $scope.lunch_menu = "";
        $scope.state = "";
        $scope.color = "";

        $scope.checkFoodItemsCount = function () {
            if ($scope.lunch_menu == "") {
                $scope.state = "Please enter data first";
                $scope.status = "error";
            } else {
                var lunch_menu_string = $scope.lunch_menu;
                var itemArray = lunch_menu_string.split(",").filter(Boolean);
                if (itemArray.length != 0) {
                    if (itemArray.length <= 3) {
                        $scope.status = "success";
                        $scope.state = "Enjoy!";
                    } else {
                        $scope.status = "error";
                        $scope.state = "Too Much!";
                    }
                } else {
                    $scope.state = "Please enter valid data";
                    $scope.status = "error";
                }
            }
        };
    }
})();
