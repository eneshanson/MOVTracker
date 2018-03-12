import { SIGNED_IN, 
    SET_ACTORS, 
    SET_FAVORITEACTORS, 
    SET_MOVIES, 
    SET_FAVORITEMOVIES } from '../constants'

export function logUser(email) {
    const action ={
        type: SIGNED_IN,
        email
    }
    return action;
}

export function SetActors(Actors) {
    const action = {
        type: SET_ACTORS,
        Actors
    }
    return action
}

export function SetFavoriteActors(FavoriteActors) {
    const action = {
        type: SET_FAVORITEACTORS,
        FavoriteActors
    }
    return action;
}

export function SetMovies(Movies) {
    const action = {
        type: SET_MOVIES,
        Movies
    }
    return action;
}

export function SetFavoriteMovies(FavoriteMovies) {
    const action = {
        type: SET_FAVORITEMOVIES,
        FavoriteMovies
    }
    return action;
}