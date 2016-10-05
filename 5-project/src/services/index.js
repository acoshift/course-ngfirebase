import { FirebaseService } from './firebase.service'
import { MeService } from './me.service'

export default [
  { name: '$firebase', service: FirebaseService },
  { name: '$me', service: MeService }
]
