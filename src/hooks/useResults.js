import { useEffect, useState } from 'react'
import spoonacular from '../apis/spoonacular'

export default () => {
    const [results, setResults] = useState([])

    const searchApi = async() => {
        try{
            const response = await spoonacular.get('search',{params: {
                app_id: '2a126c57',
                app_key: 'd0584cebbbd61003fd402979e7b5f37f',
                q: 'pizza',
                to: 12
            }})
            setResults(response.data.hits)
        } catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        searchApi()
    }, [])
    
    return results
}

