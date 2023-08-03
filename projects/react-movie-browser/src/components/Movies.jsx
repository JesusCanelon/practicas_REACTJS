import './Movies.css'

export const ListMoviesRender = ({ movies }) => {
    return (
        <ul className="listaMovies">
            {movies.map(movie => (
                <li key={movie.id}>
                    <h3>{movie.title}</h3>
                    <p>{movie.year}</p>
                    <img className='moviesImages' src={movie.poster} alt={movie.title} />
                </li>
            )
            )}
        </ul>
    )
}

export const NotFoundMovies = () => {
    return (
        <p>Movie Not Found</p>
    )
}

export const Movies = ({movies, hasMovies}) => {
    return (
        hasMovies ? <ListMoviesRender movies={movies}/> : <NotFoundMovies />
    )
}