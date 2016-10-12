class CourseCreate {
  constructor ($course, $state) {
    'ngInject'

    this.name = ''
    this.description = ''

    this.$course = $course
    this.$state = $state
  }

  submit () {
    this.$course.create({
      name: this.name,
      description: this.description
    })
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
