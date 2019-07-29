import authReducer from './authReducer'
import userReducer from './userReducer'
import crawlRecipeReducer from './recipeReducer';
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    recipe: crawlRecipeReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
})

export default rootReducer