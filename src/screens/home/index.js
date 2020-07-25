import React, { useState, useEffect } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

import RecipeCard from '../../components/recipeCard'
import styles from './styles'


//import useResults from '../../hooks/useResults'
import spoonacular from '../../apis/spoonacular'

const Home = () => {
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(false)

    const searchApi = async() => {
        try{
            const response = await spoonacular.get('search',{params: {
                app_id: '2a126c57',
                app_key: 'd0584cebbbd61003fd402979e7b5f37f',
                q: 'pizza',
                to: 12
            }})
            setLoading(true)
            setResults([...results,...response.data.hits])
        } catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        searchApi()
    }, [])

    const renderFooter = () => {
        if(!loading) return null
        return(
            <View style={styles.loading}>
                <ActivityIndicator />
            </View>
        )
    }


    //console.log(results)
    //let results = useResults()
    //console.log(results.recipes[0] == undefined?'ainda n':results.recipes[0].title)
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.pageName}>Home</Text>
                <Text style={styles.welcome}>What will we cook today?</Text>
            </View>
            <View style={{alignSelf: 'center'}}>
                <FlatList style={{marginBottom: '15%'}}
                    ListFooterComponent={renderFooter()}
                    onEndReached={() => {searchApi()}}
                    onEndReachedThreshold={0.2}
                    showsVerticalScrollIndicator={false}
                    data={results}
                    keyExtractor={(item) => {return((Math.random()*100).toString())}}
                    renderItem={( item ) => {return(
                            <RecipeCard
                            title={results[item.index].recipe.label}
                            image={results[item.index].recipe.image}
                            tag={results[item.index].recipe.healthLabels[0]}
                            ingr={results[item.index].recipe.ingredients}
                            ingrLines={results[item.index].recipe.ingredientLines}
                            src={results[item.index].recipe.url}
                        />
                        
                    )}}
                />
            </View>
            
        </View>
    )
}



export default Home