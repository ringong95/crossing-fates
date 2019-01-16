import { FETCH_MATCHES } from '../actions/fetchActions'

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_MATCHES:
        return action.payload.map((match)=>{
            const newDate = new Date(match.date*1000)
            var newMatch = match
            newMatch["date"] = newDate;
            return newMatch
        })
        default:
        return state;
    }
};