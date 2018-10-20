import { DELETE_SELECTED, DELETE_UNSELECTED } from '../actions/types'

const initialState = -1

export default (state = initialState, action) => {
    switch (action.type) {
        case DELETE_SELECTED:
            return action.payload
        case DELETE_UNSELECTED:
            return -1
        default:
            return state
    }
}