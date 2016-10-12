export class MeService {
  constructor ($firebase, $course) {
    'ngInject'

    this.$firebase = $firebase
    this.$course = $course
  }

  saveProfile (profile) {
    return this.$firebase.currentUser()
      .flatMap((currentUser) => this.$firebase.set(`user/${currentUser.uid}`, profile))
  }

  getProfile () {
    return this.$firebase.currentUser()
      .flatMap((currentUser) => this.$firebase.onValue(`user/${currentUser.uid}`))
  }

  upload (file) {
    return this.$firebase.currentUser()
      .flatMap(({ uid }) => this.$firebase.upload(`user/${uid}/${Date.now()}`, file))
      .map((res) => res.downloadURL)
  }

  myOwnCourse () {
    return this.$firebase.currentUser()
      .flatMap(({ uid }) => this.$course.ownCourses(uid))
  }

  applyCourse (id) {
    return this.$firebase.currentUser()
      .flatMap(({ uid }) => this.$course.applyCourse(id, uid))
  }
}
