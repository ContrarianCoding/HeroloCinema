import { toggleLoading } from './toggleLoadingAction'
import { addMovieAction } from './addMovieAction'

const fetchMovie = async (dispatch, title) => {
    console.log('fetching movie: ' + title)
    var fetchstr = 'https://www.omdbapi.com/?apikey=4834ebc9&t=' + title.replace(' ', '+')
    var movres = await fetch(fetchstr)
    var movdata = await movres.json()
    addMovieAction(movdata)(dispatch)
}

export const fetchMovies = async (dispatch, searchword) => {
    console.log('fetchMovies')
    var res = await fetch('https://www.omdbapi.com/?apikey=4834ebc9&s=' + searchword.replace(' ', '+'))
    var data = await res.json()
    toggleLoading()(dispatch)
    data.Search.forEach((mov) => {
        fetchMovie(dispatch, mov.Title)
    })
    toggleLoading()(dispatch)
}
