import { SET_ERROR, UNSET_ERROR } from '../actions/types'

const initialState = ''

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_ERROR:
            return action.payload
        case UNSET_ERROR:
            return ''
        default:
            return state
    }
}