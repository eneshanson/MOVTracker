import { SET_USERS, SET_MOVIES } from '../constants';

export default (state = [], action) => {
    switch (action.type) {
        case SET_MOVIES:
            const { Movies } = action;
            return Movies;
        default:
            return state;
    }
}
