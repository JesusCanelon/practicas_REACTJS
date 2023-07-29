export const ListMoviesRender = ({ movies }) => {
    return (
        <ul>
            {movies.map(movie => (
                <li key={movie.id}>
                    <h3>{movie.title}</h3>
                    <p>{movie.year}</p>
                    <img src={movie.poster} alt={movie.title} />
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