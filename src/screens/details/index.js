import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './styles'
import IngredientsList from '../../components/ingredientsList'

const Details = () => {
    return(
        <View style={styles.container}>
            <Image style={styles.banner} source={require('../../assets/burger.jpg')} />
            <Text style={styles.name}>Lamb Tzatziki Burgers</Text>
            <View style={styles.info}>
                <View style={styles.tag1}>
                    <Image style={styles.logos} source={require('../../assets/tag.png')} />
                    <Text style={styles.tagText}>Lamb</Text>
                </View>
                <View style={styles.tag2}>
                    <Image style={styles.logos} source={require('../../assets/world.png')} />
                    <Text style={styles.tagText}>Greek</Text>
                </View>
            </View>
            <View style={styles.line}></View>
            <View style={styles.ingredients}>
                <Text style={styles.topicText}>Ingredients</Text>
                <IngredientsList />
            </View>
            <View style={styles.instructions}>
                <Text style={styles.topicText}>Instructions</Text>
                
            </View>
        </View>
    )
}



export default Details