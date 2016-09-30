import angular from 'angular'
import _ from 'lodash'

angular
  .module('app')
  .controller('LandingController', LandingController)

function LandingController ($http, LIBRARY_URL) {
  const vm = this
  vm.name = 'acoshift'
  vm.select = 'Artist'
  vm.list = []
  vm.resetList = resetList

  $http.get(LIBRARY_URL)
    .then((res) => res.data)
    .then((res) => {
      console.log(res)
      vm.tracks = res
      resetList()
    })

  function resetList () {
    let list = _(vm.tracks).map((track) => track[vm.select])
    if (vm.select !== 'Name') list = list.uniq()
    vm.list = list.sort().value()
  }
}
