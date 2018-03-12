import { SET_FAVORITEMOVIES } from '../constants';

export default (state = [], action) => {
    switch(action.type) {
        case SET_FAVORITEMOVIES:
            const { FavoriteMovies } = action;
            return FavoriteMovies;
        default:
            return state;
    }
}