import firebase from 'firebase'
import { Observable, BehaviorSubject } from 'rxjs'

export class FirebaseService {
  constructor ($q, $rootScope) {
    'ngInject'

    this.$q = $q
    this.$rootScope = $rootScope
    this.currentUser = new BehaviorSubject()

    firebase.auth().onAuthStateChanged((user) => {
      this.currentUser.next(user)
    })
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
}
