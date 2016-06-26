(function() {
    "user strict";
    var app = angular.module("productManagementApp", [
        "common.services",
        "ui.router",
        "ui.mask",
        "ui.bootstrap",
        "angularCharts",
        "productResourceMock"
    ]);

    app.config(['$stateProvider', '$urlRouterProvider', productRoutes]);

    app.config(function($provide) {
        $provide.decorator("$exceptionHandler", ["$delegate",
            function($delegate) {
                return function(exception, cause) {
                    exception.message = "Please contact the Help Desk! \n Message: " +
                        exception.message;
                    $delegate(exception, cause);
                    //alert(exception.message);
                    toastr.error(exception.message);
                };
            }
        ]);
    });


    function productRoutes($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state("home", {
                url: "/",
                templateUrl: "app/welcome.html"
            })
            .state("productList", {
                url: "/products",
                templateUrl: "app/products/productList.html",
                controller: "ProductListController as vm"
            })
            .state("productDetail", {
                url: "/products/:productId",
                templateUrl: "app/products/productDetail.html",
                controller: "ProductDetailController as vm",
                resolve: {
                    productResource: "productResource",
                    product: function(productResource, $stateParams) {
                        var productId = $stateParams.productId;
                        return productResource.get({
                            productId: productId
                        }).$promise;
                    }
                }
            })
            .state("productEdit", {
                abstract: true,
                url: "/products/edit/:productId",
                templateUrl: "app/products/productEdit.html",
                controller: "ProductEditController as vm",
                resolve: {
                    productResource: "productResource",
                    product: function(productResource, $stateParams) {
                        var productId = $stateParams.productId;
                        return productResource.get({
                            productId: productId
                        }).$promise;
                    }
                }
            })
            .state("productEdit.info", {
                url: "/info",
                templateUrl: "app/products/productEditInfo.html"
            })
            .state("productEdit.price", {
                url: "/price",
                templateUrl: "app/products/productEditPrice.html"
            })
            .state("productEdit.tags", {
                url: "/tags",
                templateUrl: "app/products/productEditTags.html"
            })
            .state("priceAnalytics", {
                url: "/priceAnalytics",
                templateUrl: "app/prices/priceAnalytics.html",
                controller: "PriceAnalyticsController",
                resolve: {
                    productResource: "productResource",
                    products: function(productResource) {
                        return productResource.query(function(response) {
                                // no code needed for success
                            },
                            function(response) {
                                if (response.status == 404) {
                                    alert("Error accessing resource: " +
                                        response.config.method + " " + response.config.url);
                                } else {
                                    alert(response.statusText);
                                }
                            }).$promise;
                    }
                }
            })

    }

}());
