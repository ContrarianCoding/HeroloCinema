import { NEW_MOVIE } from './types'

export const addMovieAction = mov => dispatch => {
    dispatch({
        type: NEW_MOVIE,
        payload: mov
    })
}