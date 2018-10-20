import { EDIT_SELECTED, EDIT_UNSELECTED } from '../actions/types'

const initialState = -1

export default (state = initialState, action) => {
    switch (action.type) {
        case EDIT_SELECTED:
            return action.payload
        case EDIT_UNSELECTED:
            return -1
        default:
            return state
    }
}