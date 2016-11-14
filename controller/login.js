app.controller('loginController',function($scope,$http){
//    console.log("hellp");
    $scope.data = {
        email:"",
        password:"",
        
        login:function(){
            var loginData;
            loginData = $scope.data;
            var url = "server/login.php";
         
            $http.post(url).success( function(response) {
               loginData.res = response;
               
            });
        }
    };
});

app.controller('registerController',function($scope){
//    console.log('register');
    $scope.heading ="Register";
    $scope.user={
        name : ""
    }
});