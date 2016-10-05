import firebase from 'firebase'

export class AuthController {
  constructor ($scope) {
    this.$scope = $scope

    firebase.auth().onAuthStateChanged((user) => {
      console.log(user)
    })
  }

  signUp () {
    firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
      .then((res) => {
        // console.log(res)
        console.log(firebase.auth().currentUser)
      })
  }

  signIn () {
    this.signInLoading = true
    firebase.auth().signInWithEmailAndPassword(this.email, this.password)
      .then((res) => {
        this.$scope.$apply(() => {
          this.signInLoading = false
        })
      })
  }

  googleSignIn () {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithRedirect(provider)
      .then((res) => {
        console.log(res)
      })
  }

  signOut () {
    firebase.auth().signOut()
  }
}
