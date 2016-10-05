export class EditProfileController {
  constructor ($me, $state, $scope) {
    'ngInject'

    this.$me = $me
    this.$state = $state
    this.name = ''
    this.aboutMe = ''

    $me.getProfile()
      .first()
      .subscribe(
        (profile) => {
          console.log(profile)
          this.name = profile.name
          this.aboutMe = profile.aboutMe
        }
      )
  }

  save () {
    this.saving = true
    this.$me.saveProfile({
      name: this.name,
      aboutMe: this.aboutMe
    })
      .then(() => {
        this.saving = false
        this.$state.go('profile')
      })
  }
}
