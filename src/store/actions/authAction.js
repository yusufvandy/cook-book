export const signIn = (creds, {firebase}) => {
    return (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(
            creds.email,
            creds.password
        ).then(() => {
            console.log('go')
            dispatch({ type: 'LOGIN_SUCCESS' })
        }).catch((err) => {
            console.log('no')
            dispatch({ type: 'LOGIN_ERROR', err })
        })
    }
}