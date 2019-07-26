export const crawlRecipes = (data, { firestore }) => {
    return (dispatch) => {
        firestore.collection('recipes').add(data)
        // .then(() => {
        //     dispatch({type: 'CRAWL_RECIPES', recipes})
        // }).catch((err) => {
        //     dispatch({type: 'CRAWL_RECIPES_ERROR', err})
        // })
        // console.log(firestore.collection('recipes'))
    }
}

export const crawlRecipea = (user, { firebase, firestore, history }) => {
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
        // .then(() => {
        //     user = firebase.auth().currentUser;
        //     return user.updateProfile({
        //         displayName : username
        //     })
        // })
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