import { EDIT_UNSELECTED } from './types'

export const cancelEditMovieAction = () => dispatch => {
    dispatch({
        type: EDIT_UNSELECTED
    })
}
