import firebase from 'firebase'
import { Observable, BehaviorSubject } from 'rxjs'

export class FirebaseService {
  constructor ($q, $rootScope) {
    'ngInject'

    this.$q = $q
    this.$rootScope = $rootScope
    this._currentUser = new BehaviorSubject()

    firebase.auth().onAuthStateChanged((user) => {
      this._currentUser.next(user)
    })
  }

  currentUser () {
    return this._currentUser.filter((x) => x !== undefined)
  }

  signOut () {
    firebase.auth().signOut()
  }

  signInWithEmailAndPassword (email, password) {
    return this.$q((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(resolve, reject)
    })
  }

  signInWithGoogle () {
    const provider = new firebase.auth.GoogleAuthProvider()
    return this.$q((resolve, reject) => {
      firebase.auth().signInWithRedirect(provider)
        .then(resolve, reject)
    })
  }

  createUserWithEmailAndPassword (email, password) {
    return this.$q((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(resolve, reject)
    })
  }

  set (path, data) {
    return this.$q((resolve, reject) => {
      firebase.database().ref(path).set(data)
        .then(resolve, reject)
    })
  }

  onValue (path) {
    return Observable.create((o) => {
      const ref = firebase.database().ref(path)
      const fn = ref.on('value', (snapshot) => {
        setTimeout(() => {
          this.$rootScope.$apply(() => {
            o.next(snapshot.val())
          })
        }, 0)
      })
      return () => {
        ref.off('value', fn)
      }
    })
  }

  onceValue (path, callback) {
    firebase.database().ref(path).once('value', (snapshot) => {
      setTimeout(() => {
        this.$rootScope.$apply(() => {
          callback(snapshot.val())
        })
      }, 0)
    })
  }

  upload (path, file) {
    return Observable.create((o) => {
      firebase.storage().ref(path).put(file)
        .then((res) => {
          setTimeout(() => {
            this.$rootScope.$apply(() => {
              o.next(res)
              o.complete()
            }, 0)
          })
        }, (err) => {
          setTimeout(() => {
            this.$rootScope.$apply(() => {
              o.error(err)
            })
          }, 0)
        })
    })
  }
}
