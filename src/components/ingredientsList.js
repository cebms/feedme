import React from 'react'
import { View, StyleSheet, Image, FlatList } from 'react-native'

const IngredientsList = ({ingredients}) => {
    return(
        <View style={{flexDirection:'row'}}>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={ingredients}
                keyExtractor={item => {return((Math.random()*100).toString())}}
                renderItem={(item) => {return(
                    <View style={styles.ingredientsContainer}>
                        <Image style={styles.ingredients} source={{uri: ingredients[item.index].image}} />
                    </View>
                )}
                }


            />
        </View>
    )}

const styles = StyleSheet.create({
    ingredients: {
        height: 72,
        width: 72,
        borderRadius: 6,
        borderWidth: 2,
        borderColor: '#43BCCD'
    },
    ingredientsContainer: {
        padding: 4,
        margin: 10,
    }

})
export default IngredientsList