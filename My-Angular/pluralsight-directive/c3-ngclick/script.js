(function() {
    angular.module('myApp', []);

    angular.module('myApp').controller('MainController', function($scope) {
        $scope.data = { message: "I am not clicked." };
        $scope.clickHandler = function(p) {
            console.log('Clicked..');
            p.message = "I am clicked.";
        }
    });

    angular.module('myApp').directive('myClick', function($parse) {
        return {
            link: function(scope, el, attrs) {
                var fn = $parse(attrs['myClick']);
                el.on('click', function() {
                    scope.$apply(function() {
                        fn(scope);
                    })
                })
            }
        }
    });

}());
