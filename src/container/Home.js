import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { compose } from 'redux'
import { useSelector, useDispatch } from 'react-redux'
import { withFirebase, withFirestore } from 'react-redux-firebase'

import { SContainer } from '../styles/global'
import { edamamConfig } from '../config/edamam'
import { crawlRecipes } from '../actions/recipeAction'
import Navbar from "../components/Navbar";
import Signup from "./Signup"
import Signin from "./Signin"



const Home = ({firebase, firestore}) => {
  const firebaseState = useSelector(state => state.firebase);
  const [recipes, setRecipes] = useState([
  // {
  //   label: 'Chicken Mustard',
  //   calories: 12323,
  //   ingredients: [
  //     {text: 'makan', num: 1123},
  //     {text: 'makan2', num: 11223},
  //     {text: 'makan3', num: 11213},
  //     {text: 'makan4', num: 11223},
  //   ],
  //   uri: 'bebas.com',
  //   image: 'caca.com'
  // },{
  //   label: 'Chicken Mustardo jo',
  //   calories: 12323,
  //   ingredients: [
  //     {text: 'makan', num: 1123},
  //     {text: 'makan2', num: 11223},
  //     {text: 'makan3', num: 11213},
  //     {text: 'makan4', num: 11223},
  //   ],
  //   uri: 'bebas.com',
  //   image: 'caca.com'
  // }
  null
  ]);

  const dispatch = useDispatch()

  const URL = `https://api.edamam.com/search?q=chicken&app_id=${edamamConfig.APP_ID}&app_key=${edamamConfig.APP_KEY}&from=0&to=25`;

  useEffect(
    () => {
      const getRecipes = async () => {
        const res = await fetch(URL);
        const data = await res.json()
        // const recipes = data.hits.recipe
        // console.log(recipes)
        setRecipes(data.hits)
        // dispatch(crawlRecipes(recipes, { firestore }))
        console.log(data)
      }

      // const mapped = recipes.map((recipe) => {
      //   return recipe
      // })
      // const newRecipes = recipes.map((obj)=> {return Object.assign({}, obj)});


      // console.log(newRecipes)
      
      getRecipes()
    }, []
  )

  // console.log(firebase)
  console.log(firebase)

  const logoutHandler = () => {firebase.auth().signOut()
    .then(() => {
      console.log('logout success')
    })
    .catch((err) => {
      console.log('logout error', err)
    })
  }

  const exportHandler = (recipe) => {
    console.log(recipe)
    dispatch(crawlRecipes(recipe, { firestore }))
  }

  const homepage = () => {
    return (
      <SContainer>
        <div>
          <h1>All chicken recipes</h1>
          <div>
            {recipes !== null ? recipes.map((recipe) => {
              return (
                <div style={{border: '1px #ccc solid', marginBottom: 25, padding: 15}}>{recipe.recipe.label} 
                <button onClick={() => exportHandler(recipe)}>export</button></div>
              )}
            ) : <div>empty</div>}
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
          <Navbar
            isEmpty={firebaseState.auth.isEmpty}
            photoURL={firebaseState.profile.photoURL}
            logoutHandler={logoutHandler}
          />
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
  withFirebase,
  withFirestore
)(Home);