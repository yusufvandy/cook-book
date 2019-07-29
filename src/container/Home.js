import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { compose } from 'redux'
import { useSelector, useDispatch } from 'react-redux'
import { withFirestore, firestoreConnect } from 'react-redux-firebase'

import { SContainer } from '../styles/global'
import { edamamConfig } from '../config/edamam'
import { crawlRecipes } from '../store/actions/recipeAction'
import Navbar from "../components/Navbar";
import Signup from "./Signup"
import Signin from "./Signin"



const Home = ({ firestore }) => {
  const firebaseState = useSelector(state => state.firebase);
  // const [recipes, setRecipes] = useState([null]);
  const recipes = useSelector(state => state.firestore.data.recipes)

  const dispatch = useDispatch()

  const URL = `https://api.edamam.com/search?q=chicken&app_id=${edamamConfig.APP_ID}&app_key=${edamamConfig.APP_KEY}&from=0&to=25`;

  // useEffect(
  //   () => {
  //     const getRecipes = async () => {
  //       // fetch from edamam api
  //       // const res = await fetch(URL);
  //       // const data = await res.json()
  //       // setRecipes(data.hits)
  //       // dispatch(crawlRecipes(recipes, { firestore }))
  //       // await firestore.collection('recipes').get()
  //     }
  //     getRecipes()
  //   }, []
  // )

  console.log(recipes)

  const exportHandler = (recipe) => {
    console.log(recipe)
    dispatch(crawlRecipes(recipe, { firestore }))
  }

  const homepage = () => {
    return (
      <SContainer>
        <div>
          <h1>All chicken recipes</h1>
          <div style={{display: 'flex', flexWrap: 'wrap', margin: '0 -15px'}}>
          {recipes === undefined || null
            ? 'Loading'
            : Object.keys(recipes).map((key) => (
                <div key={key} style={{flex: '0 0 calc(22% - 30px)', margin: '0 15px', border: '1px #ccc solid', marginBottom: 25, padding: 15}}>{recipes[key].recipe.label}</div>
              ))
          }
          </div>
        </div>
      </SContainer>
    )
  }

  const recipesPage = () => {
    return(
      <div>
        <h1>Recipes Page</h1>
      </div>
    )
  }

  return (
    !firebaseState.profile.isLoaded ? 
    <div>Loading</div>
    : <Router>
        <React.Fragment>
          <Navbar />
          <Switch>
            <Route path='/' exact component={homepage}/>
            <Route path='/recipes' component={recipesPage}/>
            <Route path='/signin' component={Signin}/>
            <Route path='/signup' component={Signup}/>
          </Switch>
        </React.Fragment>
    </Router>
  );
};


export default compose(
  withFirestore,
  firestoreConnect([
    {collection: 'recipes'}
  ])
)(Home);