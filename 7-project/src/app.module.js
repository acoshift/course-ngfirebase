import angular from 'angular'
import moment from 'moment'

import Config from './app.config'
import Controllers from './controllers'
import Services from './services'
import Components from './components'

const app = angular.module('app', ['ui.router'])

app.config(Config)

Controllers.forEach((controller) => {
  app.controller(controller.name, controller.controller)
})

Services.forEach((service) => {
  app.service(service.name, service.service)
})

Components.forEach((component) => {
  app.component(component.selector, component)
})

app.filter('date', () => {
  return (value) => {
    return moment(value).format('DD/MM/YYYY')
  }
})
