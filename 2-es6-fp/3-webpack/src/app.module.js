import angular from 'angular'

angular
  .module('app', ['ui.router'])
  .controller('AppController', AppController)

function AppController () {
  this.name = 'acoshift'
  console.log('app')
}
