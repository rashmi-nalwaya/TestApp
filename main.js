var app = angular.module('app',['ui.router']);
// custom provider
app.provider('book',function(){
    this.$get = function(){
        var appName = 'Books Logger';
        return {
            appName : appName
        };
    };
});
app.directive('headerSidebar',function(){
    return {
        template : "",
        templateUrl : "sidebar.html"
    }
});

app.config(['$stateProvider','$locationProvider','$urlRouterProvider','bookProvider',function($stateProvider,$locationProvider,$urlRouterProvider,bookProvider){
        $urlRouterProvider.otherwise("/");

        $stateProvider
//            .state('home', {
//                url: "/",
//                templateUrl : '',
//                controller : 'homeController'
//            })
            .state('login', {
                url: "/login",
                templateUrl : 'login.html',
                controller : 'loginController'
            })
            .state('register', {
                url: "/register",
                templateUrl : 'register.html',
                controller : 'registerController'
            })
            .state('book', {
                url: "/books",
                templateUrl : 'books.html',
                controller : 'bookController',
                controllerAs:'books'
            })
            .state('book.book_detail', {
                url: "/:id",
                templateUrl : 'book_detail.html',
                controller : 'bookController',
                controllerAs:'books'
            });
           
       
        $locationProvider.html5Mode(true);

}]);

