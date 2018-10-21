import React, { Component } from 'react'

export default class EditMoviePopup extends Component {

    fixTitle(title) {
        var ENGLISH = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 "
        var onlyEnglish = title.split('').filter(c => ENGLISH.indexOf(c) >= 0).join('')
        var lowerCase = onlyEnglish.toLowerCase()
        var wordlist = lowerCase.split(' ')
        var capWords = wordlist.map(s => s.charAt(0).toUpperCase() + s.slice(1))
        var titleFixed = capWords.join(' ')
        return titleFixed
    }

    editTitle(newTitle) {
        this.myTitle = this.fixTitle(newTitle)
        this.props.changeThings(this.myMovie())
    }

    editYear(newTitle) {
        this.myYear = newTitle
        this.props.changeThings(this.myMovie())
    }

    editTime(newTitle) {
        this.myTime = newTitle
        this.props.changeThings(this.myMovie())
    }

    editGenre(newTitle) {
        this.myGenre = newTitle
        this.props.changeThings(this.myMovie())
    }

    editDirector(newTitle) {
        this.myDir = newTitle
        this.props.changeThings(this.myMovie())
    }
    
    myMovie() {
        return { Title: this.myTitle, Year: this.myYear, Runtime: this.myTime, Genre: this.myGenre, Director: this.myDir }
    }

    isEmpty(obj) {
        for(var key in obj) {
            if(obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }

    render() {
        console.log('movie keys: ' + Object.keys(this.props.movie))
        this.myID = this.props.id
        this.myTitle = ''
        this.myYear = ''
        this.myTime = ''
        this.myGenre = ''
        this.myDir = ''
        if(this.props.movie && !this.isEmpty(this.props.movie)){
            this.myTitle = this.props.movie.Title
            this.myYear = this.props.movie.Year
            this.myTime = this.props.movie.Runtime
            this.myGenre = this.props.movie.Genre.substring(0, 15)
            this.myDir = this.props.movie.Director.substring(0, 15)
        }
        return (
            <div className="MoviePopup">
                <div className="MovieCol">
                    <div className="MovieTabPairContainer" id="idTab">
                        <span>ID: </span>
                        <span>{this.myID}</span>
                    </div>
                    <div className="MovieTabPairContainer">
                        <span>Title: </span>
                        <input type="text" value={this.myTitle} onChange={(val) => this.editTitle(val.target.value)} />
                    </div>
                </div>
                <div className="MovieCol">
                    <div className="MovieTabPairContainer">
                        <span>Year: </span>
                        <input type="text" value={this.myYear} onChange={(val) => this.editYear(val.target.value)} />
                    </div>
                    <div className="MovieTabPairContainer">
                        <span>Runtime: </span>
                        <input type="text" value={this.myTime} onChange={(val) => this.editTime(val.target.value)} />
                    </div>
                </div>
                <div className="MovieCol">
                    <div className="MovieTabPairContainer">
                        <span>Genre: </span>
                        <input type="text" value={this.myGenre} onChange={(val) => this.editGenre(val.target.value)} />
                    </div>
                    <div className="MovieTabPairContainer">
                        <span>Director: </span>
                        <input type="text" value={this.myDir} onChange={(val) => this.editDirector(val.target.value)} />
                    </div>
                </div>
            </div>
        )
    }
}
