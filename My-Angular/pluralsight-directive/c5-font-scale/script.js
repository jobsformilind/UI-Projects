(function() {
    var myApp = angular.module('myApp', []);

    angular.module('myApp').controller('MainController', function($scope) {
        $scope.size = 150;
    })

    angular.module('myApp').directive('fontScale', function() {
        return {
            link: function(scope, el, attrs) {
                scope.$watch(attrs['fontScale'], function(newValue) {
                    el.css('font-size', newValue + '%');
                })
            }
        }
    })

}());
