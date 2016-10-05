export class MeService {
  constructor ($firebase) {
    'ngInject'

    this.$firebase = $firebase
  }

  saveProfile (profile) {
    const currentUser = this.$firebase.currentUser()
    return this.$firebase.set(`user/${currentUser.uid}`, profile)
  }

  getProfile () {
    return this.$firebase.currentUser
      .filter((currentUser) => currentUser !== undefined)
      .flatMap((currentUser) => this.$firebase.onValue(`user/${currentUser.uid}`))
  }
}
