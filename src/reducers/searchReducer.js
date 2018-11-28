import { SEARCH_TEXT } from '.././actions/searchActions.js'
const defaultState = {
    p1Ch1: '',
    p1Ch2: '',
    p2Ch1: '',
    p2Ch2: '',
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case SEARCH_TEXT:
        const { player, character, text } = action.payload.text;
        var newState = {}
        const key = `p${player}Ch${character}`
        newState = {...state}
        newState[key] = text

        return  newState 
        default:
        return state;
    }
};