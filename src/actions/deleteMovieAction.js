import { DELETE_MOVIE, DELETE_UNSELECTED } from './types'

export const deleteMovieAction = (index) => dispatch => {
    dispatch({
        type: DELETE_MOVIE,
        payload: index
    })
    dispatch({
        type: DELETE_UNSELECTED
    })
}
