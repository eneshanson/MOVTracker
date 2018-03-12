import { SET_FAVORITEACTORS } from '../constants';

export default (state = [], action) => {
    switch(action.type) {
        case SET_FAVORITEACTORS:
            const { FavoriteActors } = action;
            return FavoriteActors;
        default:
            return state;
    }
}