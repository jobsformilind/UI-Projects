(function() {
    var myApp = angular.module('myApp', []);

    var MainController = function($scope) {
      $scope.user1 = {
        name: 'Milind Patil',
        address: {
          street: 'PO Box 123',
          city: 'Secret Rebel Base',
          planet: 'Yavin 4'
        },
        friends: [
          'Han',
          'Leia',
          'Chewbacca'
        ]
      };

      $scope.user2 = {
        name: 'Nandu Patil',
        address: {
          street: 'PO Box 123',
          city: 'Secret Rebel Base',
          planet: 'Yavin 4'
        },
        friends: [
          'Han',
          'Leia'
        ]
      };
    }

    var userInfoCard = function() {
      return {
        templateUrl: 'userInfoCard.html',
        restrict: 'E',
        scope: {
          user: '=person',
          initialcollapsed: '@collapsed'
        },
        controller: function($scope) {
          $scope.collapsed = ($scope.initialcollapsed === 'true');
          $scope.knightMe = function(user) {
            user.rank = "Knight";
          }
          $scope.collapse = function() {
            $scope.collapsed = !$scope.collapsed;
          }
          $scope.removeFriend = function(friend) {
            var idx = $scope.user.friends.indexOf(friend);
            if (idx > -1) {
              $scope.user.friends.splice(idx, 1);
            }
          }
        }
      }
    }

    var address = function() {
      return {
        templateUrl: "userAddress.html",
        restrict: "E",
        scope: true,
        controller: function($scope) {
          $scope.collapsed = false;
          $scope.collapseAddress = function() {
            $scope.collapsed = true;
          }
          $scope.expandAddress = function() {
            $scope.collapsed = false;
          }
        }
      }
    }

    var removeFriend = function() {
      return {
        restrict: 'E',
        templateUrl: 'removeFriend.html',
        scope: {
          notifyParent: '&method'
        },
        controller: function($scope) {
          $scope.removing = false;
          $scope.startRemove = function() {
            $scope.removing = true;
          }
          $scope.cancelRemove = function() {
            $scope.removing = false;
          }
          $scope.confirmRemove = function() {
            $scope.notifyParent();
          }
        }
      }
    }

    myApp.controller('MainController', MainController);
    myApp.directive('pgUserInfoCard', userInfoCard);
    myApp.directive('pgAddress', address);
    myApp.directive('pgRemoveFriend', removeFriend);

}());

    