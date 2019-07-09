import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import keyFirebase from './keyFirebase'


firebase.initializeApp(keyFirebase);
firebase.firestore()

export default firebase;