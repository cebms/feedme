import React, { useEffect, useState} from 'react'
import { View, Text, Image } from 'react-native'

import RecipeCard from '../../components/recipeCard'
import styles from './styles'

import spoonacular from '../../apis/spoonacular'

import useResults from '../../hooks/useResults'
import { FlatList } from 'react-native-gesture-handler'

const Home = () => {
    const results = useResults()
    //console.log(results.recipes[0] == undefined?'ainda n':results.recipes[0].title)
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.pageName}>Home</Text>
                <Text style={styles.welcome}>What will we cook today?</Text>
            </View>
            <View style={{alignSelf: 'center'}}>
                <FlatList
                    data={results.recipes}
                    keyExtractor={(item) => item.title}
                    renderItem={(item) => {return(
                        <RecipeCard title={results.recipes[item.index].title} />
                    )}}
                />
            </View>
            
        </View>
    )
}



export default Home