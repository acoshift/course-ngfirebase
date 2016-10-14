class CourseCreate {
  constructor ($course, $state) {
    'ngInject'

    this.$course = $course
    this.$state = $state
  }

  submit (model) {
    this.$course.create(model)
      .subscribe(
        (res) => {
          this.$state.go('course-view', { id: res.key })
        }
      )
  }
}

export default {
  selector: 'courseCreate',
  template: require('./course-create.component.html'),
  controller: CourseCreate
}
