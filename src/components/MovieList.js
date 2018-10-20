import React, { Component } from 'react'
import { connect } from 'react-redux'
import MovieTab from './MovieTab'
import { setEditMovieAction } from '../actions/setEditMovieAction'
import { setDeleteMovieAction } from '../actions/setDeleteMovieAction'


class MovieList extends Component {

      selectTabEdit(index) {
        return () => {
          console.log('clicked tab: ' + index + '!')
          setEditMovieAction(index, this.props.movies.movieList[index])(this.props.dispatch)
        }
      }
      
      selectTabDelete(index) {
        return () => {
          console.log('delete tab: ' + index + '!')
          setDeleteMovieAction(index)(this.props.dispatch)
        }
      }

      renderTabs() {
        console.log('renderTabs: ' + this.props.movies)
        return this.props.movies.movieList.map((movie, index) => {
          console.log('rendering tab: ' + movie.Title)
          return <MovieTab key={index} id={index} movie={movie} editClick={this.selectTabEdit(index)} deleteClick={this.selectTabDelete(index)} />
        })
      }
    
      renderLoadTab() {
        if(this.props.loading) return <div className="MovieTabContainer"><img alt='' src='https://loading.io/spinners/curve-bars/index.curved-bar-spinner.svg' /></div>
      }
    

    render() {
        return (
        <div className="MovieListContainer">
            {this.renderTabs()}
            {this.renderLoadTab()}
        </div>
        )
    }
}

const mapStateToProps = state => {
  return {...state}
}

export default connect(mapStateToProps, null)(MovieList)
