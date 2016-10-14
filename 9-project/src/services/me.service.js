import { Observable } from 'rxjs'

export class MeService {
  constructor ($firebase, $course, $user) {
    'ngInject'

    this.$firebase = $firebase
    this.$course = $course
    this.$user = $user
  }

  saveProfile (profile) {
    return this.$firebase.currentUser()
      .flatMap((currentUser) => this.$firebase.set(`user/${currentUser.uid}`, profile))
  }

  getProfile () {
    return this.$firebase.currentUser()
      .flatMap(({ uid }) =>
        Observable.combineLatest(
          this.$user.get(uid),
          this.$user.isInstructor(uid)))
      .map(([user, isInstructor]) => ({...user, isInstructor}))
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

  course () {
    return this.$firebase.currentUser()
      .flatMap(({ uid }) => this.$course.user(uid))
  }
}
