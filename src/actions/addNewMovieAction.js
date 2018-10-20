import { ADD_CANDIDATE } from './types'
import { toggleNewMovieAction } from './toggleNewMovieAction';


export const addNewMovieAction = () => dispatch => {
    dispatch({
        type: ADD_CANDIDATE
    })
    toggleNewMovieAction()(dispatch)
}