import { useEffect, useState } from 'react'
import spoonacular from '../apis/spoonacular'

export default () => {
    const [results, setResults] = useState([])

    const searchApi = async() => {
        try{
            const response = await spoonacular.get('random.php')
            setResults(response.data.meals)
        } catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        searchApi()
    }, [])
    
    return results
}

