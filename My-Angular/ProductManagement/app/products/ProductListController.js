(function() {
    "use strict";
    angular.module("productManagementApp")
        .controller('ProductListController', ["$scope", "productResource", ProductListController]);

    function ProductListController($scope, productResource) {
        var vm = this;
        vm.showImage = false;
        
        productResource.query(function(data) {
            vm.products = data;
        });
        
        vm.toggleImage = function() {
            vm.showImage = !vm.showImage;
        };
    };
}());
