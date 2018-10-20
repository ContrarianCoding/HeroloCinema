import { DELETE_UNSELECTED } from './types'

export const cancelDeleteMovieAction = () => dispatch => {
    dispatch({
        type: DELETE_UNSELECTED
    })
}
