import { useState, useEffect } from 'react'
import './App.css'
import { useMovies } from './hooks/useMovies'
import useSearch from './hooks/useSearch'
import { Movies } from './components/Movies'

function App() {
  //Custom Hooks
  const {searching, errorStatus, setSearching} = useSearch()
  const {movies, getMovies} = useMovies({searching})
  
  //El simbolo de interrogacion es para comparar si es true o false y hacer return dicho valor
  const hasMovies = movies?.length > 0

  //Funcion para submit del form
  const handleSubmit = (e) => {
    e.preventDefault();

    //O puedes recuperarlo asi:
    /*const fields = Object.fromEntries(new FormData(e.target))
    const {inputSearch} = fields
    console.log(inputSearch)*/

    //Puedes recuperar el valor asi:
    const form = new FormData(e.target)
    const value = form.get('inputSearch')
    getMovies()
  }

  //Funcion para capturar valor del input
  const handleInput = (e) => {
    const value = e.target.value
    setSearching(value)
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column', placeItems: 'center', width: '100%'}}>
      <header>
        <h1>Movie Browser</h1>
        <form className='formBrowser' onSubmit={handleSubmit}>
          <input onChange={handleInput} name='inputSearch' value={searching} className='estiloObjetos' type="text" placeholder='Barbie, Oppenheimer, Interstellar...' />
          <button className='estiloObjetos' type='submit'>Search</button>
        </form>
        {errorStatus && <p style={{color: 'red'}}>{errorStatus}</p>}
      </header>

      <main>
        <Movies movies={movies} hasMovies={hasMovies} />
      </main>
    </div>
  )
}

export default App
