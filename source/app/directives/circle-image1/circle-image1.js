/**
 * Example of an angular directive. Notice that unlike filters,
 * services and controllers, directive live off of their own module.
 * This is intended so that we can keep directive as decoupled from the
 * project as possible. Think of them as little self contained components.
 */
angular.module('raCircleImage1', []).directive('barChart', function () {
 var chart = d3.custom.barChart();
    return {
        
       restrict: 'E',
                replace: true,
                template: '<div class="chart"></div>',
                scope:{
                    height: '=height',
                    data: '=data',
                    hovered: '&hovered'
                },
                link: function(scope, element, attrs) {
                    var chartEl = d3.select(element[0]);
                    chart.on('customHover', function(d, i){
                        scope.hovered({args:d});
                    });

                    scope.$watch('data', function (newVal, oldVal) {
                        chartEl.datum(newVal).call(chart);
                    });

                    scope.$watch('height', function(d, i){
                        chartEl.call(chart.height(scope.height));
                    })
                }
    };

});
