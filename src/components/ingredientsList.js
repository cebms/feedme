import React from 'react'
import { View, Text, StyleSheet, Image, FlatList } from 'react-native'

const IngredientsList = () => {
    const temp = ['a','b','c','d','e']
    return(
        <View style={{flexDirection:'row'}}>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={temp}
                keyExtractor={item => item}
                renderItem={(item) => {return(
                    <View style={styles.ingredientsContainer}>
                        <Image style={styles.ingredients} source={require('../assets/wheat.png')} />
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
    },
    ingredientsContainer: {
        borderColor: '#43BCCD',
        borderWidth: 2,
        padding: 4,
        margin: 10,
        borderRadius: 6
    }

})
export default IngredientsList