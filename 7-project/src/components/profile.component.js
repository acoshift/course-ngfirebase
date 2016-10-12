class ProfileController {
  constructor ($me) {
    'ngInject'

    this.name = ''
    this.aboutMe = ''
    this.photo = ''

    $me.getProfile()
      .subscribe(
        (profile) => {
          this.name = profile.name
          this.aboutMe = profile.aboutMe
          this.photo = profile.photo
        }
      )
  }
}

export default {
  selector: 'profile',
  template: require('./profile.component.html'),
  controller: ProfileController
}
