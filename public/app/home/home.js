(function () {
    "use strict";
    angular.module("BookShop")
    .config(function config($stateProvider) {
        $stateProvider
        .state('home', {
            // url: '/',
            controller: 'HomeCtrl as vm',
            templateUrl: 'app/home/home.html',
            data: {pageTitle: 'Home'}
        })
    })
    .controller('HomeCtrl', function ($scope, $state, $rootScope) {

        let vm = this;

        console.log('home controller on')

        // Controller added in case new features needs to be added
        // or if we want to add features on the header
    })

})();