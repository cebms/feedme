import { useEffect, useState } from 'react'
import spoonacular from '../apis/spoonacular'

export default () => {
    const [results, setResults] = useState([])

    const searchApi = async() => {
        try{
            const response = await spoonacular.get('recipes/random',{params: {apiKey: 'ae4f3f51d512408cb77ddf6e9b5acf7e', number:2}})
            setResults(response.data)
        } catch(error){
            console.log("error(carlos)")
        }
    }

    useEffect(() => {
        searchApi()
    }, [])
    
    return results
}

