import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './container/Home';
import NewHome from './NewHome';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'

import firebase from 'firebase/app'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createFirestoreInstance, getFirestore, reduxFirestore } from 'redux-firestore'
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase'
import fbConfig from './config/fbConfig'

import rootReducer from './reducers/rootReducer'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        reduxFirestore(fbConfig)
    )
)

const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true
}

const rrfProps = {
    firebase,
    fbConfig,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
}

const App = () => (
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
            <Home />
        </ReactReduxFirebaseProvider>
    </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
