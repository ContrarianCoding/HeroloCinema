import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from './reducers';

const initialState = {
    movies: { movieList: [], candidate: {} },
    loading: false,
    editSelected: -1,
    newMovie: false,
    deleteSelected: -1,
    error: ''
}

const middleware = [thunk, logger]

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
)

export default store