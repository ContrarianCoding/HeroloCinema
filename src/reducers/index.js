import { combineReducers } from 'redux'
import moviesReducer from './moviesReducer'
import deleteSelectedReducer from './deleteSelectedReducer'
import editSelectedReducer from './editSelectedReducer'
import loadingReducer from './loadingReducer'
import newMovieReducer from './newMovieReducer'
import errorReducer from './errorReducer';

const rootReducer =  combineReducers({
    movies: moviesReducer,
    loading: loadingReducer,
    editSelected: editSelectedReducer,
    deleteSelected: deleteSelectedReducer,
    newMovie: newMovieReducer,
    error: errorReducer
})

export default rootReducer