import angular from 'angular'

angular
  .module('app')
  .config(Config)

function Config ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/')

  $stateProvider
    .state('landing', {
      url: '/',
      template: require('./landing.html'),
      controller: 'AppController'
    })
}
