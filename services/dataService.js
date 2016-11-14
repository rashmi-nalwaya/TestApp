(function(){
   app.factory('dataService',dataService);
   
   function dataService(){
       return {
           getAllBook:getAllBook
       };
       
       function getAllBook(){
           return [
               {
                   id:'1',
                   name:'Book1',
                   author:'Author1'
               },
               {
                   id:'2',
                   name:'Book2',
                   author:'Author 2'
               },
               {
                   id:'3',
                   name:'Book3',
                   author:'Author 3'
               }
           ];
       }
   }
}());