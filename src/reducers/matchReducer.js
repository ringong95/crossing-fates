import { FETCH_MATCHES } from '../actions/fetchActions'

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_MATCHES:
        console.log(action)
        return action.payload
        default:
        return state;
    }
};