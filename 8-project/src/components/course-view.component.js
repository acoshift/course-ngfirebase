import { Observable } from 'rxjs'

class CourseViewController {
  constructor ($course, $state, $firebase) {
    'ngInject'

    this.$course = $course
    this.$firebase = $firebase
    this.courseId = $state.params.id
    this.course = null
    this.isApply = false
    this.isOwner = false
  }

  $onInit () {
    this.course$ = Observable.combineLatest(
      this.$firebase.currentUser().first(),
      this.$course.get(this.courseId)
    )
      .subscribe(
        ([{ uid }, course]) => {
          this.userId = uid
          this.course = course
          this.isOwner = uid === course.owner
          this.isApply = course.student && course.student[uid]
        }
      )
  }

  $onDestroy () {
    this.course$.unsubscribe()
  }
}

export default {
  selector: 'courseView',
  template: require('./course-view.component.html'),
  controller: CourseViewController
}
