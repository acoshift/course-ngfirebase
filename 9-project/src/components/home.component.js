class HomeController {
  constructor ($course, $state) {
    'ngInject'

    this.$course = $course
    this.$state = $state
    this.courses = []
  }

  $onInit () {
    this.$course.list()
      .subscribe(
        (courses) => {
          this.courses = courses
        }
      )
  }
}

export default {
  selector: 'home',
  template: require('./home.component.html'),
  controller: HomeController
}
