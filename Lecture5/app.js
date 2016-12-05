(function(){

    angular.module('myFirstApp', [])

    .controller('MyFirstController', function($scope) {
        $scope.name = 'Mat';
        $scope.sayHello = function() {
            
        }
    });

})();