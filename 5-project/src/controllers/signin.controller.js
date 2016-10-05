export class SignInController {
  constructor ($firebase, $state) {
    'ngInject'

    this.$firebase = $firebase
    this.$state = $state
  }

  signIn () {
    this.signInLoading = true
    this.$firebase.signInWithEmailAndPassword(this.email, this.password)
      .then((res) => {
        this.signInLoading = false
        this.$state.go('home')
      }, (err) => {
        this.signInLoading = false
        window.alert(err.message)
      })
  }
}
