import firebase from 'firebase'

export default function Config ($stateProvider, $urlRouterProvider, $locationProvider) {
  'ngInject'

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
      abstract: true,
      template: require('./views/auth.html')
    })
    .state('auth.signin', {
      url: '/',
      template: require('./views/signin.html'),
      controller: 'SignInController',
      controllerAs: 'vm'
    })
    .state('auth.register', {
      url: '/register',
      template: require('./views/register.html')
    })
    .state('layout', {
      template: require('./views/layout.html')
    })
    .state('home', {
      url: '/home',
      parent: 'layout',
      template: require('./views/home.html'),
      controller: 'HomeController',
      controllerAs: 'vm'
    })
    .state('profile', {
      url: '/profile',
      parent: 'layout',
      template: require('./views/profile.html')
    })
    .state('edit-profile', {
      url: '/profile/edit',
      parent: 'layout',
      template: require('./views/edit-profile.html'),
      controller: 'EditProfileController',
      controllerAs: 'vm'
    })
}
