import authReducer from './authReducer'
import userReducer from './userReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
})

export default rootReducer