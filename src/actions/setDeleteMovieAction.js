import { DELETE_SELECTED } from './types'

export const setDeleteMovieAction = (index) => dispatch => {
    dispatch({
        type: DELETE_SELECTED,
        payload: index
    })
}
