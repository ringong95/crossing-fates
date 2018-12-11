import { FETCH_MATCHES } from '../actions/fetchActions'

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_MATCHES:
        return action.payload
        default:
        return state;
    }
};