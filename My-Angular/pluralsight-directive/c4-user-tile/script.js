(function() {
    var myApp = angular.module('myApp', []);

    angular.module('myApp').controller('MainController', function($scope) {
        $scope.user1 = {
            name: 'Milind Patil',
            selected: false
        }
    })

    angular.module('myApp').directive('userTitle', function() {
        return {
            restrict: 'E',
            scope: {
                user: '=person'
            },
            templateUrl: 'userTitle.html'
        }
    })

    angular.module('myApp').directive('userClickSelect', function() {
        return {
            link: function(scope, el, attrs) {
                el.on('mouseenter', function() {
                        scope.user.selected = true;
                        scope.$apply();
                    }),
                    el.on('mouseleave', function() {
                        scope.user.selected = false;
                        scope.$apply();
                    })
            }
        }
    })

}());
