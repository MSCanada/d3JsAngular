/**
 * Simple exampel of an angular controller. Notice that it lives off
 * of the controllers module, which was included in the applicaiton module.
 */

angular.module('controllers').controller('HomeController', ['$scope', function ($scope) {

   
     $scope.options = {width: 500, height: 300, 'bar': 'aaa'};
            $scope.data = [1, 2, 3, 4];
            $scope.hovered = function(d){
                $scope.barValue = d;
                $scope.$apply();
            };
            $scope.barValue = 'None';

}]);