import withMovies from '../json/movies.json'
import withoutMovies from '../json/movies-not-found.json'

const API_KEY = 'eea8d9fe'

export const searchMovies = async ({ searching }) => {
    if (searching === '') return null

    if (searching) {
        //setResponseMovies(withMovies)
        return fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${searching}`)
            .then(resp => resp.json())
            .then(data => {
                //console.log(data)
                const movies = data.Search;

                const mapped = movies?.map(movie => ({
                    id: movie.imdbID,
                    title: movie.Title,
                    poster: movie.Poster,
                    year: movie.Year,
                    type: movie.Type
                }))
                return mapped
                //setResponseMovies(data)
            })
    } else {
        //setResponseMovies(withoutMovies)
        return withoutMovies
    }
}