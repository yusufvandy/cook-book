export const createUser = (user, { firebase, firestore, history }) => {
    return (dispatch) => {

        firebase.auth().createUserWithEmailAndPassword(
            user.email, 
            user.password
        )
        .then((resp) => {
            return firestore.collection('users').doc(resp.user.uid).set({
                username : user.username,
                email: user.email,
                password: user.password,
                photoURL: user.photoURL
            })
        })
        .then(() => {
            dispatch({type: 'CREATE_USER', user})
        }).then(() => {
            window.location.reload()
            history.push('/')
        }).catch((err) => {
            dispatch({type: 'CREATE_USER_ERROR', err})
        })
    }
}