import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { compose } from 'redux'
import { useSelector } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'

import { SContainer } from '../styles/global'
import Navbar from "../components/Navbar";
import Card from "../components/Card"
// import Crawler from '../components/Crawler'
import Signup from "./Signup"
import Signin from "./Signin"



const Home = () => {
  const firebaseState = useSelector(state => state.firebase);
  const recipes = useSelector(state => state.firestore.data.recipes)
  // console.log(dummy)

  const homepage = () => {
    return (
      <SContainer>
        <div>
          <h1>All recipes</h1>
          <div style={{display: 'flex', flexWrap: 'wrap', margin: '0 -15px'}}>
          {recipes == undefined || null
            ? <div style={{margin: '0 15px'}}>No Recipes Available</div>
            : Object.keys(recipes).map((keyID) => (
                <Card 
                  key={keyID}
                  keyID={keyID}
                  recipes={recipes}
                />
                // <div key={key} style={{flex: '0 0 calc(22% - 30px)', margin: '0 15px', border: '1px #ccc solid', marginBottom: 25, padding: 15}}>{recipes[key].label}</div>
              ))
          }
          </div>
          {/* <Crawler /> */}
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
  firestoreConnect([
    {
      collection: 'recipes',
      limit: 3
      // where: [
      //   ['label', '<=', 'Chicken'],
      //   ['label', '>=', 'Chicken']
      // ],
      // storeAs: 'chicken_recipes',
      // limit: 10
      // docs: recipesId,
      // subcollections: [
      //   { collection: 'recipe',
      //     where: [
      //       ['label', 'array-contains', 'chicken']
      //     ]
      //   }
      // ],
    }
  ])
)(Home);

// export default Home;
