import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const RecipeCard = ({ title, image, tag, ingrLines, ingr, src }) => {
    const Navigation = useNavigation()
    return(
        <TouchableOpacity activeOpacity={.8} onPress={() => {Navigation.navigate('Details', { title: title, image: image, tag: tag, ingrLines: ingrLines, ingr: ingr, src: src })}}>
            <View style={styles.container}>
                <View>
                    <Image style={styles.image} source={{uri: image}} />
                </View>
                <View style={styles.bar}>
                    <View style={styles.info}>
                        <View style={{width:208}}><Text numberOfLines={1} style={styles.nameText}>{ title }</Text></View>
                        <View style={styles.tags}>
                            <Image style={styles.tagImage} source={require('../assets/tag.png')} />
                            <Text numberOfLines={1} style={styles.tagText}>{tag}</Text>
                            
                        </View>
                    </View>
                    <View style={styles.button}>
                        <Feather name="arrow-right" color="#FFF" size={28} />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#662E9B',
        height: 175,
        width: '100%',
        borderRadius: 16,
        marginTop: 8
    },
    image: {
        height: 119,
        width: 320,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#43BCCD',
        height: 56,
        width: 48,
        borderBottomRightRadius: 16
    },
    bar: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    info: {
        marginLeft: 10,
        
    },
    nameText: {
        color: '#FFF',
        fontSize: 14,
        fontFamily: 'Ubuntu_700Bold',
        marginTop: 4
    },
    tags: {
        flexDirection: 'row',
        marginTop: 8
    },
    tagText: {
        width: 150,
        color: '#FFF',
        fontSize: 14,
        fontFamily: 'Ubuntu_700Bold',
        marginRight: 24
    },
    tagImage: {
        marginRight:  10
    }
})

export default RecipeCard