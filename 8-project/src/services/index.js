import { FirebaseService } from './firebase.service'
import { MeService } from './me.service'
import { CourseService } from './course.service'
import { UserService } from './user.service'

export default [
  { name: '$firebase', service: FirebaseService },
  { name: '$me', service: MeService },
  { name: '$course', service: CourseService },
  { name: '$user', service: UserService }
]
