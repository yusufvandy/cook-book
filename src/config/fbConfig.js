import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import keyFirebase from 'keyFirebase'


firebase.initializeApp(keyFirebase);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase;