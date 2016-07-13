(function() {
    var myApp = angular.module('myApp', []);

    myApp.controller('MainController', ['$scope', function($scope) {
        $scope.color = 'green';

    }]);

    myApp.directive('helloWorld', function() {
        return {
            restrict: 'AEC',
            replace: true,
            template: '<p style="background-color:{{color}}">Hello World !!! </p>',
            
            link: function($scope, el, attrs, controller) {
                el.on('click', function() {
                    console.log($scope);
                    el.css('background-color', 'white');
                    $scope.$apply(function() {
                       $scope.color = 'white';
                    });

                });
            }
        };
    });
}());
