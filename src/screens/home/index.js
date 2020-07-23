import React from 'react'
import { View, Text, Image } from 'react-native'

import RecipeCard from '../../components/recipeCard'
import styles from './styles'


import useResults from '../../hooks/useResults'
import { FlatList } from 'react-native-gesture-handler'

const Home = () => {
    const results = useResults()
    //console.log(results.recipes[0] == undefined?'ainda n':results.recipes[0].title)
    //console.log(results)
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.pageName}>Home</Text>
                <Text style={styles.welcome}>What will we cook today?</Text>
            </View>
            <View style={{alignSelf: 'center'}}>
                <FlatList
                    data={results}
                    keyExtractor={(item) => {
                        return (Math.random()*100).toString()
                    }}
                    renderItem={(item) => {return(
                        <RecipeCard
                            title={results[item.index].strMeal}
                            image={results[item.index].strMealThumb}
                            area={results[item.index].strArea}
                            category={results[item.index].strCategory}
                            id={results[item.index].idMeal}
                        />
                    )}}
                />
            </View>
            
        </View>
    )
}



export default Home