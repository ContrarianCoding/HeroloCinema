import React, { Component } from 'react'
import { connect } from 'react-redux'
import EditMoviePopup from './EditMoviePopup'
import DeleteMoviePopup from './DeleteMoviePopup'
import { cancelDeleteMovieAction } from '../actions/cancelDeleteMovieAction'
import { cancelEditMovieAction } from '../actions/cancelEditMovieAction'
import { deleteMovieAction }  from '../actions/deleteMovieAction'
import { toggleNewMovieAction }  from '../actions/toggleNewMovieAction'
import { editCandidateAction } from '../actions/editCandidateAction';
import { editAction } from '../actions/editAction';
import { addNewMovieAction } from '../actions/addNewMovieAction';
import { setErrorAction } from '../actions/setErrorAction';

class Popup extends Component {

    isValidYear(yearString) {
        var res = true
        var digits = '0123456789'
        var digitList = yearString.split('')
        digitList.forEach((dig) => {
            if(digits.indexOf(dig) < 0){
                res = false
            }
        })
        return res
    }

    isCandidateValid() {
        var res = "yes"
        if(!this.props.movies.candidate.Title) {
            res = "Error, movie title field is empty"
        }
        if(!this.props.movies.candidate.Year) {
            res = "Error, movie release year field is empty"
        }
        if(!this.props.movies.candidate.Runtime) {
            res = "Error, movie runtime field is empty"
        }
        if(!this.props.movies.candidate.Genre) {
            res = "Error, movie genre field is empty"
        }
        if(!this.props.movies.candidate.Director) {
            res = "Error, movie director field is empty"
        }
        this.props.movies.movieList.forEach((movie, index) => {
            if(movie.Title === this.props.movies.candidate.Title && index !== this.props.editSelected){
                res = "Error, movie title already taken"
            }
        })
        if(!this.isValidYear(this.props.movies.candidate.Year)){
            res = "Error, release year not valid"
        }
        return res
    }

    okOnClick() {
        var validMovie = ''
        if(this.props.editSelected !== -1){
            validMovie = this.isCandidateValid()
            if(validMovie === "yes") {
                editAction(this.props.editSelected)(this.props.dispatch)
            }
            else {
                setErrorAction(validMovie)(this.props.dispatch)
            }
        }
        if(this.props.newMovie){
            validMovie = this.isCandidateValid()
            console.log('is candidate valid? ' + validMovie)
            if(validMovie === "yes") {
                addNewMovieAction()(this.props.dispatch)
            }
            else {
                setErrorAction(validMovie)(this.props.dispatch)
            }
        }
        if(this.props.deleteSelected !== -1){
            deleteMovieAction(this.props.deleteSelected)(this.props.dispatch)
        }
    }

    cancelOnClick() {
        if(this.props.editSelected !== -1){
            cancelEditMovieAction()(this.props.dispatch)
        }
        if(this.props.newMovie){
            toggleNewMovieAction()(this.props.dispatch)
        }
        if(this.props.deleteSelected !== -1){
            cancelDeleteMovieAction()(this.props.dispatch)
        }
    }

    getButtons() {
        return (
        <div>
            <button className="btn" onClick={() => this.okOnClick()}>Okay</button>
            <button className="btn" onClick={() => this.cancelOnClick()}>Cancel</button>
        </div>
        )
    }

  render() {
    if(this.props.editSelected !== -1){
        return (
        <div className="PopupContainer">
            <div className="MoviePopupHolder">
                {this.getButtons()}
                <EditMoviePopup id={this.props.editSelected} movie={this.props.movies.candidate} changeThings={(movie) => editCandidateAction(movie)(this.props.dispatch)} />
            </div>
        </div>
        )
    }
    if(this.props.newMovie){
        return (
        <div className="PopupContainer">
            <div className="MoviePopupHolder">
                {this.getButtons()}
                <EditMoviePopup id={this.props.movies.movieList.length} movie={this.props.movies.candidate} changeThings={(movie) => editCandidateAction(movie)(this.props.dispatch)} />
            </div>
        </div>
        )
    }
    if(this.props.deleteSelected !== -1){
        return (
        <div className="PopupContainer">
            <div className="MoviePopupHolder">
                {this.getButtons()}
                <DeleteMoviePopup movie={this.props.movies.movieList[this.props.deleteSelected].Title} />
            </div>
        </div>
        )
    }
    return null
  }
}

const mapStateToProps = state => {
    return {...state}
  }
  
export default connect(mapStateToProps, null)(Popup)
