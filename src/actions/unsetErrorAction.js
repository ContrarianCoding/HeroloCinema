import { UNSET_ERROR } from './types'

export const unsetErrorAction = () => dispatch => {
    dispatch({
        type: UNSET_ERROR
    })
}