import angular from 'angular'

angular
  .module('app', ['ui.router'])
  .controller('AppController', AppController)
  .filter('toUpper', ToUpperFilter)

function AppController () {
  this.name = 'acoshift'
}

function ToUpperFilter () {
  return (value) => {
    return value.toUpperCase()
  }
}
