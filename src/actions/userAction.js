export const createUserBak = (user) => {
    return (dispatch, {getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('users').add({
            ...user
        }).then(() => {
            dispatch({type: 'CREATE_USER', user})
        });
    }
}

export const createUser = ({username, email, password, firebase, history}) => {
    return (dispatch) => {
        let user = null
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
            user = firebase.auth().currentUser;
            return user.updateProfile({
                displayName : username
            })
        }).then(() => {
            dispatch({type: 'CREATE_USER', user})
        }).then(() => {
            history.push('/')
            window.location.reload()
        }).catch((err) => {
            dispatch({type: 'CREATE_USER_ERROR', err})
        })
    }
}