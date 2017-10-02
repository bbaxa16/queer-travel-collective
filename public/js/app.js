const app = angular.module('qtc', []);

app.controller('mainController', ['$http', function($http){
  this.admin = false;
  this.toggleAdmin = function(){
    this.admin = !this.admin;
  }


}])
