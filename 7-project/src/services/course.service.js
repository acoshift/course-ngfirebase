export class CourseService {
  constructor ($firebase) {
    'ngInject'

    this.$firebase = $firebase
  }

  create ({ name, description }) {
    return this.$firebase.currentUser()
      .flatMap(({ uid }) => this.$firebase.push('course', {
        name,
        description,
        owner: uid,
        timestamp: this.$firebase.timestamp
      }))
  }

  list () {
    return this.$firebase.onArrayValue('course')
  }

  get (id) {
    return this.$firebase.onValue(`course/${id}`)
  }
}
