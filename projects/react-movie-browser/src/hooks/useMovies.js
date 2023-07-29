import responseMovies from '../json/movies.json'
import withoutMovies from '../json/movies-not-found.json'

//Custom Hook para guardar datos de las peliculas
export function useMovies () {
    const movies = responseMovies.Search;

    const mapped = movies?.map(movie => ({
        id: movie.imdbID,
        title: movie.Title,
        poster: movie.Poster,
        year: movie.Year,
        type: movie.Type
    }))

    return {movies: mapped}
}