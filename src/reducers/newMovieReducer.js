import { TOGGLE_NEW_MOVIE } from '../actions/types'

const initialState = false

export default (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_NEW_MOVIE:
            return !state
        default:
            return state
    }
}