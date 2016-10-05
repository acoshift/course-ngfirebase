export class HomeController {
  constructor ($firebase, $state) {
    'ngInject'

    this.$firebase = $firebase
    this.$state = $state
  }

  signOut () {
    this.$firebase.signOut()
    this.$state.go('auth.signin')
  }
}
