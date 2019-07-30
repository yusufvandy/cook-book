import React, { useState, useEffect }  from 'react'
import { edamamConfig } from '../config/edamam'
import { withFirestore } from 'react-redux-firebase'

const Crawler = ({ firestore }) => {
    const [recipes, setRecipes] = useState([ ])
    const searchQuery = 'fish'

    useEffect(
        () => {
        const getRecipes = async () => {
            // fetch from edamam api
            const res = await fetch(URL);
            const data = await res.json()
            const raw = await data.hits
            await setRecipes(raw.map(
                (recipe) => {
                    recipe.recipe.bookmarked = recipe.bookmarked;
                    recipe.recipe.bought = recipe.bought;
                    return recipe.recipe
                }
            ))
        }

        getRecipes()
        }, []
    )

    const exportHandler = (recipe) => {
      firestore.collection('recipes').add(recipe).then(console.log('recipe added: ', recipe))
    }

    console.log(recipes)

    const URL = `https://api.edamam.com/search?q=${searchQuery}&app_id=${edamamConfig.APP_ID}&app_key=${edamamConfig.APP_KEY}&from=0&to=25`;
    return ( 
        <div>
            {recipes.map((recipe, index) => (
                    <div key={index}>{recipe.label} <button onClick={() => exportHandler(recipe)}>export</button></div>
                 ))
            }
        </div>
    );
}
 
export default withFirestore(Crawler);