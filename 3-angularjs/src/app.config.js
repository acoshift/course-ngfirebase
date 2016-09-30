import angular from 'angular'

angular
  .module('app')
  .config(Config)

Config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']
function Config ($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true)

  $urlRouterProvider.otherwise('/')

  $stateProvider
    .state('landing', {
      url: '/',
      template: require('./landing.html'),
      controller: 'AppController',
      controllerAs: 'vm'
    })
}
