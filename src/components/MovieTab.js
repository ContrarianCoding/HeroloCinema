import React, { Component } from 'react'

export default class MovieTab extends Component {

    render() {
        this.myID = this.props.id
        this.myTitle = this.props.movie.Title
        this.myYear = this.props.movie.Year
        this.myTime = this.props.movie.Runtime
        this.myGenre = this.props.movie.Genre.substring(0, 15)
        this.myDir = this.props.movie.Director.substring(0, 15)
        return (
            <div className="MovieTabHolder">
                <div className="MovieTabContainer" onClick={this.props.editClick}>
                    <div className="MovieColRight">
                        <span>ID: </span>
                        <span>Title: </span>
                    </div>
                    <div className="MovieColLeft">
                        <span>{this.myID}</span>
                        <span>{this.myTitle}</span>
                    </div>
                    <div className="MovieColRight">
                        <span>Year: </span>
                        <span>Runtime: </span>
                    </div>
                    <div className="MovieColLeft">
                        <span>{this.myYear}</span>
                        <span>{this.myTime}</span>
                    </div>
                    <div className="MovieColRight">
                        <span>Genre: </span>
                        <span>Director: </span>
                    </div>
                    <div className="MovieColLeft">
                        <span>{this.myGenre}</span>
                        <span>{this.myDir}</span>
                    </div>
                </div>
                <div className="deleteBar" onClick={this.props.deleteClick}>
                    <img alt="delete" src="https://ubisafe.org/images/can-vector-icon-4.png" />
                </div>
            </div>
        )
    }
}
