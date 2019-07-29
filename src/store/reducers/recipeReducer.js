const crawlRecipeReducer = ( state = null, action ) => {
    switch (action.type) {
        case 'CRAWL_RECIPES':
            console.log("recipe crawled", action.recipes)
            return action.recipes
        case 'CRAWL_RECIPES_ERROR':
            console.log("crawl recipe to firebase error", action.err)
            return action.err
        default:
            return state
    }
}

export default crawlRecipeReducer;