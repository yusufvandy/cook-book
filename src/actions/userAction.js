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

export const createUser = ({username, email, password, firebase}) => {
    return (dispatch) => {
        let user = null
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
            user = firebase.auth().currentUser;
            return user.updateProfile({
                displayName : username
            })
        }).then(() => {
            window.location.reload()
            dispatch({type: 'CREATE_USER', user})
        }).catch((err) => {
            dispatch({type: 'CREATE_USER_ERROR', err})
        })
    }
}