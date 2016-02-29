// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'LoginCtrl'
    })
    .state('app', {
      url: '/app',
      templateUrl: 'templates/app.html',
      controller: 'AppCtrl'
    })
  $urlRouterProvider.otherwise('/login');
})

.controller('LoginCtrl', function($scope, $state) {
       $scope.validate = function() {
           // some other validations...
           $state.go('app');
} })

.controller('AppCtrl', function($scope) {
  $scope.ratingArr = [{
    value: 1,
    icon: 'ion-ios-star-outline'
  }, {
    value: 2,
    icon: 'ion-ios-star-outline'
  }, {
    value: 3,
    icon: 'ion-ios-star-outline'
  }, {
    value: 4,
    icon: 'ion-ios-star-outline'
  }, {
    value: 5,
    icon: 'ion-ios-star-outline'
  }];
  $scope.setRating = function(val) {
    var rtgs = $scope.ratingArr;
    for (var i = 0; i < rtgs.length; i++) {
      if (i < val) {
        rtgs[i].icon = 'ion-ios-star';
      }
      else {
        rtgs[i].icon = 'ion-ios-star-outline';
      }
    };
  }
})