import { NEW_MOVIE, DELETE_MOVIE, EDIT_CANDIDATE, ADD_CANDIDATE, INSERT_CANDIDATE } from '../actions/types'

const initialState = {
    movieList: [],
    candidate: {}
}

export default (state = initialState, action) => {
    var newMovies = state.movieList.slice()
    switch (action.type) {
        case NEW_MOVIE:
            newMovies.push(action.payload)
            return {...state,
                movieList: newMovies
            }
        case DELETE_MOVIE:
            newMovies.splice(action.payload, 1)
            return {...state,
                movieList: newMovies
            } 
        case EDIT_CANDIDATE:
            return {...state,
                candidate: action.payload
            } 
        case ADD_CANDIDATE:
            newMovies.push(state.candidate)
            return {
                movieList: newMovies,
                candidate: {}
            } 
        case INSERT_CANDIDATE:
            newMovies[action.payload] = state.candidate
            return {
                movieList: newMovies,
                candidate: {}
            } 
        default:
            return state
    }
}