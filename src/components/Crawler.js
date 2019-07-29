import React, { useState, useEffect }  from 'react'
import { edamamConfig } from '../config/edamam'
import { exportRecipes } from '../store/actions/recipeAction'
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
            await setRecipes(data.hits)
        }

        getRecipes()
        }, []
    )

    const exportHandler = (recipe) => {
      firestore.collection('recipes').add(recipe)
    }

    console.log(recipes)

    const URL = `https://api.edamam.com/search?q=${searchQuery}&app_id=${edamamConfig.APP_ID}&app_key=${edamamConfig.APP_KEY}&from=0&to=25`;
    return ( 
        <div>
            {recipes.map((recipe, index) => (
                    <div key={index}>{recipe.recipe.label} <button onClick={() => exportHandler(recipe)}>export</button></div>
                 ))
            }
        </div>
    );
}
 
export default withFirestore(Crawler);