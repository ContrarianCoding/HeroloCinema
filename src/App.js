import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './store'
import MovieList from './components/MovieList';
import Popup from './components/Popup';
import { fetchMovies } from './actions/fetchAction'
import { toggleNewMovieAction } from './actions/toggleNewMovieAction'
import ErrorPopup from './components/ErrorPopup';


// TODO - 

// make react error message
// clean code


class App extends Component {

  componentDidMount() {
    fetchMovies(store.dispatch, 'movie')
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1>Welcome to Herolo Cinema!</h1>
          </header>
          <MovieList />
          <button className="btn" onClick={() => toggleNewMovieAction()(store.dispatch)}>New Movie</button>
          <Popup />
          <ErrorPopup />
        </div>
      </Provider>
    );
  }
}

export default App;
