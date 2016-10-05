import firebase from 'firebase'

export default function ($stateProvider, $urlRouterProvider, $locationProvider) {
  firebase.initializeApp({
    apiKey: 'AIzaSyAjokG9qO70Ed0A_JWQKAaqo9RPwfCf5ug',
    authDomain: 'acourse-acoshift.firebaseapp.com',
    databaseURL: 'https://acourse-acoshift.firebaseio.com',
    storageBucket: 'acourse-acoshift.appspot.com',
    messagingSenderId: '234888397395'
  })

  $locationProvider.html5Mode(true)

  $urlRouterProvider.otherwise('/')

  $stateProvider
    .state('auth', {
      url: '/',
      template: require('./views/auth.html'),
      controller: 'AuthController',
      controllerAs: 'vm'
    })
}
