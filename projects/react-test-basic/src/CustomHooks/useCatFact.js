import { useState, useEffect } from "react"
import { getRandomFact } from "../Logic/Constants"

export const useCatFact = () => {
    const [fact, setFact] = useState()
  
    const refreshCat = () => {
      getRandomFact().then(newFact => setFact(newFact))
    }
  
    //useEffect para hacer el primer Fecth para obtener objeto de la API
    useEffect(() => refreshCat, [])
  
    return {fact, refreshCat}
  }