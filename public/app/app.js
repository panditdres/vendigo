(function () {
    angular.module('BookShop', [
        'ui.router',
        'ui.bootstrap',
        'ngStorage',
        'ngToast',
        'ngMessages',
        'angular-loading-bar'
    ])
    .config(function appConfig($logProvider, $compileProvider, $urlRouterProvider, $locationProvider, cfpLoadingBarProvider) {
        $urlRouterProvider.otherwise('/');
        $logProvider.debugEnabled(false);
        $locationProvider.html5Mode(true);
        cfpLoadingBarProvider.includeSpinner = false;
        $compileProvider.debugInfoEnabled(false);
    })

    .controller('AppCtrl', function AppCtrl($scope, $localStorage, $location, $sessionStorage) {

        console.log('app ctrl')

        $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            if (angular.isDefined(toState.data.pageTitle)) {
                $scope.pageTitle = toState.data.pageTitle;
            }
        })
    })
})();
