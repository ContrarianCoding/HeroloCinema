import { EDIT_SELECTED } from './types'
import { editCandidateAction } from './editCandidateAction';

export const setEditMovieAction = (index, mov) => dispatch => {
    dispatch({
        type: EDIT_SELECTED,
        payload: index
    })
    editCandidateAction(mov)(dispatch)
}