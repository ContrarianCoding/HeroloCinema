import { TOGGLE_LOADING } from '../actions/types'

const initialState = false

export default (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_LOADING:
            return !state
        default:
            return state
    }
}