export default {
  selector: 'courseForm',
  template: require('./course-form.component.html'),
  bindings: {
    model: '<',
    onSubmit: '&',
    mode: '@'
  }
}
