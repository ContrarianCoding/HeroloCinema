import { TOGGLE_NEW_MOVIE } from './types'
import { editCandidateAction } from './editCandidateAction';

export const toggleNewMovieAction = () => dispatch => {
    dispatch({
        type: TOGGLE_NEW_MOVIE
    })
    editCandidateAction({})(dispatch)
}
