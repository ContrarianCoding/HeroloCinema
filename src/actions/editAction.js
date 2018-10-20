import { INSERT_CANDIDATE } from './types'
import { cancelEditMovieAction } from './cancelEditMovieAction';


export const editAction = index => dispatch => {
    dispatch({
        type: INSERT_CANDIDATE,
        payload: index
    })
    cancelEditMovieAction()(dispatch)
}