import React, { Component } from 'react'

export default class DeleteMoviePopup extends Component {
  render() {
    return (
        <div className="MoviePopup">
            <h3>Are you sure you want to delete {this.props.movie}?</h3>
        </div>
    )
  }
}
