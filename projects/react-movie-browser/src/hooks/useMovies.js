import { useRef, useState } from 'react';
import { searchMovies } from '../services/movies';

//Custom Hook para guardar datos de las peliculas
export function useMovies({ searching }) {
    const [movies, setMovies] = useState([])
    const previousSearch = useRef({searching})

    const getMovies = async () => {
        if (searching === previousSearch.current) return
        previousSearch.current = searching
        console.log('hey');
        const moviesFound = await searchMovies({searching})
        setMovies(moviesFound)
    }

    return { movies, getMovies }
}