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
      template: require('./views/auth.html'),
      resolve: {
        redirectToHomeIfAuth
      }
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
      template: require('./views/layout.html'),
      controller: 'LayoutController',
      controllerAs: 'vm',
      resolve: {
        redirectToAuthIfNotAuth
      }
    })
    .state('home', {
      url: '/home',
      parent: 'layout',
      template: '<home></home>'
    })
    .state('profile', {
      url: '/profile',
      parent: 'layout',
      template: '<profile></profile>'
    })
    .state('edit-profile', {
      url: '/profile/edit',
      parent: 'layout',
      template: '<profile-edit></profile-edit>'
    })
    .state('course-create', {
      url: '/course/create',
      parent: 'layout',
      template: '<course-create></course-create>'
    })
    .state('course-view', {
      url: '/course/:id',
      parent: 'layout',
      template: '<course-view></course-view>'
    })
}

function redirectToHomeIfAuth ($q, $state, $firebase) {
  'ngInject'
  const defer = $q.defer()
  $firebase.currentUser()
    .subscribe(
      (user) => {
        if (user) {
          defer.reject()
          $state.go('home')
        } else {
          defer.resolve()
        }
      }
    )
  return defer.promise
}

function redirectToAuthIfNotAuth ($q, $state, $firebase) {
  'ngInject'
  const defer = $q.defer()
  $firebase.currentUser()
    .subscribe(
      (user) => {
        if (!user) {
          defer.reject()
          $state.go('auth.signin')
        } else {
          defer.resolve()
        }
      }
    )
  return defer.promise
}
