export const createUser = (user) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('users').add({
            ...user
        }).then(() => {
            dispatch({type: 'CREATE_USER', user})
        });
    }
}