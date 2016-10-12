export class UserService {
  constructor ($firebase, $course) {
    'ngInject'

    this.$firebase = $firebase
  }

  get (id) {
    return this.$firebase.onValue(`user/${id}`)
  }
}
