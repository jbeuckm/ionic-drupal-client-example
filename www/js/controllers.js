angular.module('starter.controllers', ['drupal'])

.controller('DashCtrl', function($scope) {
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope, DrupalService) {
    
    $scope.showLoginForm = function() {
        DrupalService.loginForm().then($scope.$apply);
    };
    
    $scope.logout = function() {
        DrupalService.logout().then($scope.$apply);
    };
    
});
