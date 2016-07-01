(function() {
        var myApp = angular.module('myApp', []);

        var MainController = function($scope) {
            $scope.messages = [];
            $scope.handlePause = function(e) {
                console.log(e);
                $scope.messages.push({ text: "Paused !!" });
            }
        }

        var eventPause = function($parse) {
            return {
                restrict: 'A',
                link: function(scope, el, attrs) {
                    var fn = $parse(attrs['eventPause']);
                    el.on('pause', function(event) {
                            scope.$apply(function() {
                                    fn(scope, { evt: event})
                                    })
                            })
                    }
                }
            }

            var spaceBarSupport = function() {
                return {
                    restrict: "A",
                    link: function(scope, el, attrs) {
                        $('body').on('keypress', function(event) {
                            var vid1 = el[0];
                            if (event.keyCode === 32) {
                                if (vid1.paused) {
                                    vid1.play();
                                } else {
                                    vid1.pause();
                                }
                            }
                        })
                    }
                }
            }

            myApp.controller('MainController', MainController);
            myApp.directive('spaceBarSupport', spaceBarSupport);
            myApp.directive('eventPause', eventPause);

        }());
