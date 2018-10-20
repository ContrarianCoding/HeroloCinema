import { TOGGLE_LOADING } from './types'

export const toggleLoading = () => dispatch => {
    console.log('toggling load')
    dispatch({
        type: TOGGLE_LOADING
    })
}
