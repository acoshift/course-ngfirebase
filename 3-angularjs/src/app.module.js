import angular from 'angular'

angular
  .module('app', ['ui.router'])
  .filter('toUpper', ToUpperFilter)
  .constant('LIBRARY_URL', 'https://raw.githubusercontent.com/acoshift/course-ngfirebase/master/2-es6-fp/2-fp/library.json')

function ToUpperFilter () {
  return (value) => {
    return value.toUpperCase()
  }
}
