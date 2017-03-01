angular.module('starter.controllers', [])

.controller('DashCtrl', function ($scope, $http) {
    $scope.chibitextbox = null;
    $scope.rndnumb = function getRandomInt() {
        $scope.rand1 = Math.floor(Math.random() * 36) + 1;
                $http.get("js/karte.json")
       .then(function (response) {
           $scope.bacanje = response.data.karte;
           
       });

                $scope.perica = true;
                
        $scope.chibitextbox = $scope.chibitextbox + 1;

    };

    $scope.reset = function () {
        $scope.chibitextbox = null;
        $scope.perica = false;
        
    };
   
})
    
.controller('ChatsCtrl', function ($scope, $http) {
    $http.get("js/karte.json")
       .then(function (response) {
           $scope.karte = response.data.karte;
       });
})

.controller('AccountCtrl', function($scope) {
    
});
