import { useState, useEffect, useRef } from "react"

//Custom Hook useSearch()
function useSearch() {
    const [searching, setSearching] = useState('')
    //Para el feedback de errores
    const [errorStatus, setErrorStatus] = useState(null)
    //useRef para validar que es el primer render
    const isFirstRender = useRef(true)

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = searching === ''
            return
        }
        if (searching === '') {
            setErrorStatus('Cannot be empty')
            return
        }
        if (searching.length < 2) {
            setErrorStatus('Your should write 2 letters minimum')
            return
        }

        setErrorStatus(null)
    }, [searching])

    return { searching, errorStatus, setSearching }
}

export default useSearch;