import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { firebaseApp } from './firebase'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import reducer from './reducers'
import { logUser } from './actions'


import Home from './Screens/Home'
import Layout from './Screens/Layout'
import Navbar from './Components/navbar'
import LoginPage from './Screens/LoginPage';
import RegistrationPage from './Screens/RegistrationPage';
import Archives from './Screens/Archives';
import App from './Screens/App'
import AddMovie from './Components/AddMovie'
import AddActor from './Components/AddActor'
import ActorList from './Components/ActorList'
import Favorites from './Screens/Favorites'
import FavoriteActorList from './Components/FavoriteActorList'
import MovieList from './Components/MovieList'
import FavoriteMovieList from './Components/FavoriteMovieList'

const store = createStore(reducer);

firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    console.log('the user has signed in or up', user);
    const { email } = user;
    store.dispatch(logUser(email));
    browserHistory.push('Home');
  } else {
    console.log('user has signed out or still needs to sign in.')
    browserHistory.replace('LoginPage')
  }
})


const root = document.getElementById("root");
ReactDOM.render(<div>
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Home} />
        <Route path="LoginPage" component={LoginPage} />
        <Route path="Home" component={Home} />
        <Route path="RegistrationPage" component={RegistrationPage}></Route>
        <Route path="Archives" component={Archives}></Route>
        <Route path="App" component={App}></Route>
        <Route path="AddMovie" component={AddMovie}></Route>
        <Route path="AddActor" component={AddActor}></Route>
        <Route path="ActorList" component={ActorList}></Route>
        <Route path="Favorites" component={Favorites}></Route>
        <Route path="FavoriteActorList" component={FavoriteActorList}></Route>
        <Route path="MovieList" component={MovieList}></Route>
        <Route path="FavoriteMovieList" component={FavoriteMovieList}></Route>
      </Route>
    </Router>
    </Provider>
</div>, root);

