import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/database'
import keyFirebase from './keyFirebase'


firebase.initializeApp(keyFirebase);
firebase.firestore()

export default firebase;