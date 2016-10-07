import { SignInController } from './signin.controller'
import { HomeController } from './home.controller'
import { EditProfileController } from './edit-profile.controller'
import { LayoutController } from './layout.controller'

export default [
  { name: 'HomeController', controller: HomeController },
  { name: 'SignInController', controller: SignInController },
  { name: 'EditProfileController', controller: EditProfileController },
  { name: 'LayoutController', controller: LayoutController }
]
