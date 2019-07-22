const userReducer = ( state = null, action ) => {
    switch (action.type) {
        case 'CREATE_USER':
            console.log("created", action.user)
            return action.user
        case 'CREATE_USER_ERROR':
            console.log("create user error", action.err)
            return action.err
        default:
            return state
    }
}

export default userReducer;