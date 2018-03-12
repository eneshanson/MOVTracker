import { combineReducers } from 'redux';
import user from './reducer_Users'
import Actors from './reducer_Actors'
import FavoriteActors from './reducer_FavoriteActors'
import Movies from './reducer_Movies'
import FavoriteMovies from './reducer_FavoriteMovies'

export default combineReducers({
    user,
    Actors,
    FavoriteActors,
    Movies,
    FavoriteMovies
})