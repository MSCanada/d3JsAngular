/**
 * Example of an angular directive. Notice that unlike filters,
 * services and controllers, directive live off of their own module.
 * This is intended so that we can keep directive as decoupled from the
 * project as possible. Think of them as little self contained components.
 */
angular.module('raCircleImage', []).directive('raCircleImage', function () {

    return {
       restrict: 'E',
                replace: true,
                controller: function AppCtrl ($scope) {
                    $scope.update = function(d, i){ $scope.data = randomData(); };
                    function randomData(){
                    	console.log($scope.data);
        			return d3.range(~~(Math.random()*50)+1).map(function(d, i){return ~~(Math.random()*1000);});
                    }
                },
                template: '<div class="form">' +
                        'Height: {{options.height}}<br />' +
                        '<input type="range" ng-model="options.height" min="100" max="800"/>' +
                        '<br /><button ng-click=\"update()\">Update Data</button>' +
                        '<br />Hovered bar data: {{barValue}}</div>'
    };

});
