import { useEffect, useState } from 'react'
import { useCatImage } from './CustomHooks/useCatImage'
import { useCatFact } from './CustomHooks/useCatFact'

const CAT_PREFIX_URL = 'https://cataas.com'

export const App = () => {
  const {fact, refreshCat} = useCatFact()

  //Custom Hook
  const {imageUrl} = useCatImage({fact})
  

  const handleClick = async () => {
    // const newFact = await getRandomFact()
    // setFact(newFact)
    refreshCat()
  }

  return (
    <>
      <main>
        <h1>First line</h1>
        <button onClick={handleClick}>Change Cat</button>
        {fact && (<p>{fact}</p>)}
        {imageUrl && (<img src={`${CAT_PREFIX_URL}${imageUrl}`} alt={`Image extracted to ${imageUrl}`}></img>)}
      </main>
    </>
  )
}
