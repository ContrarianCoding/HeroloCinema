import { EDIT_CANDIDATE } from './types'

export const editCandidateAction = mov => dispatch => {
    dispatch({
        type: EDIT_CANDIDATE,
        payload: mov
    })
}