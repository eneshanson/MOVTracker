import { SET_USERS, SET_ACTORS } from '../constants';

export default (state = [], action) => {
    switch (action.type) {
        case SET_ACTORS:
            const { Actors } = action;
            return Actors;
        default:
            return state;
    }
}
