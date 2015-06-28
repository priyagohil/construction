angular.module('constructionApp', ['ui.router'])
    .run(function ($rootScope, $state) {
        //Alternative to using abstract state: https://github.com/angular-ui/ui-router/issues/948
        $rootScope.$on('$stateChangeStart', function (evt, to, params) {
            if (to.redirectTo) {
                evt.preventDefault();
                $state.go(to.redirectTo, params)
            }
        });
    }
)
    .config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'home/index.html',
            })
            .state('services', {
                url: '/services',
                templateUrl: 'services/index.html',
            })
    });