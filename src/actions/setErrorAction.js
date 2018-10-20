import { SET_ERROR } from './types'

export const setErrorAction = (error) => dispatch => {
    dispatch({
        type: SET_ERROR,
        payload: error
    })
}