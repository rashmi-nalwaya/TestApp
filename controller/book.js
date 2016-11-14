app.controller('bookController',function (book,dataService,$stateParams,$state){
    var vm = this;
    vm.appName = book.appName;
    vm.getAllBook = dataService.getAllBook();
//    console.log($state);
    if($stateParams.id) {
       var book_data =  findBook($stateParams.id);
       // console.log(book_data);
        angular.extend(vm,book_data);

    }
    function findBook(id){
        var targetBook = null;
        vm.getAllBook.forEach(function(book_data){
          if (book_data.id === id) targetBook = book_data;
        }); 
        return targetBook;
    }
});
 