import { useState, useEffect } from "react";

export const useCatImage = ({fact}) => {
    const [imageUrl, setImageUrl] = useState()

    //useEffect para actualizar la imagen
    useEffect(() => {
        if (!fact) return

        const threeFirstWords = fact.split(' ').slice(0, 3).join(' ')
        console.log(threeFirstWords);
        fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
            .then(resp => resp.json())
            .then(data => {
                //console.log(data);
                const { url } = data
                //console.log(url);
                setImageUrl(url)
            })
    }, [fact])

    return {imageUrl}
}