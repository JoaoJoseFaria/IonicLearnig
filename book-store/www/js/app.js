angular.module('BookStoreApp', ['ionic', 'BookStoreApp.controllers'])

.run(['$rootScope', 'AuthFactory',
  function($rootScope, , AuthFactory) {
    $rootScope.isAuthenticated = AuthFactory.isLoggedIn();
    // utility method to convert number to an array of elements
    $rootScope.getNumber = function(num) {
      return new Array(num);
    }
  }
])

.config(['$stateProvider', '$urlRouterProvider', '$httpProvider',
  function($stateProvider, $urlRouterProvider, $httpProvider) {
    // setup the token interceptor
    $httpProvider.interceptors.push('TokenInterceptor');
    $stateProvider
      .state('app', {
        url: "/app",
        abstract: true,
        templateUrl: "templates/menu.html",
        controller: 'AppCtrl'
      })
      .state('app.browse', {
        url: "/browse",
        views: {
          'menuContent': {
            templateUrl: "templates/browse.html",
            controller: 'BrowseCtrl'
          }
        }
      })
      .state('app.book', {
        url: "/book/:bookId",
        views: {
          'menuContent': {
            templateUrl: "templates/book.html",
            controller: 'BookCtrl'
          }
        }
      })
      .state('app.cart', {
        url: "/cart",
        views: {
          'menuContent': {
            templateUrl: "templates/cart.html",
            controller: 'CartCtrl'
          }
        }
      })
      .state('app.purchases', {
        url: "/purchases",
        views: {
          'menuContent': {
            templateUrl: "templates/purchases.html",
            controller: 'PurchasesCtrl'
          }
        }
      });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/browse');
  }
])