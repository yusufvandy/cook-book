const initState = {
    username: 'gondi',
    password: 'gw'
}

const userReducer = ( state = initState, action ) => {
    switch (action.type) {
        case 'CREATE_USER':
            console.log("created", action.user)
            return action.user
        default:
            return state
    }
}

export default userReducer;