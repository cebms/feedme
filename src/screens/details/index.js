import React from 'react'
import { View, Text, Image, Linking } from 'react-native'
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import styles from './styles'
import IngredientsList from '../../components/ingredientsList'


const Details = ({ route, navigation }) => {
    const Navigation = useNavigation()
    const { title, image, tag, ingrLines, ingr, src } = route.params
    
    function getUris(ingredients){
        return ingredients.image != null 
    }

    const filtered = ingr.filter(getUris)

    return(
        <>
        <View style={styles.header}>
            <TouchableOpacity onPress={() => {Navigation.goBack()}}>
                <Feather style={styles.arrow} name='arrow-left' size={26}/>
            </TouchableOpacity>
            <View style={styles.titleView}><Text style={styles.headerText} numberOfLines={1}>{title}</Text></View>
        </View>
        <ScrollView style={[styles.container,{contentContainerStyle: 'center'}]} showsVerticalScrollIndicator={false}>
            <Image style={styles.banner} source={{uri: image}} />
            <Text style={styles.name}>{ title }</Text>
            <View style={styles.info}>
                <View style={styles.tag1}>
                    <Image style={styles.logos} source={require('../../assets/tag.png')} />
                    <Text style={styles.tagText}>{ tag }</Text>
                </View>
            </View>
            <View style={styles.line}></View>
            <View style={styles.ingredients}>
                <Text style={styles.topicText}>Ingredients</Text>
                <IngredientsList ingredients={filtered}/>
            </View>
            <FlatList scrollEnabled={false} style={{width: '98%'}}
                data={filtered}
                keyExtractor={() => {return((Math.random()*100).toString())}}
                renderItem={(item) => {return(
                        <View style={styles.listView}>
                            <Feather name='chevron-right' size={16} />
                            <Text style={styles.listItem}>{item.item.text}</Text>
                        </View>
                        
                
                    )}}
            />
            <View style={styles.instructions}>
                <TouchableOpacity onPress={() => Linking.openURL(src)} activeOpacity={.8}>
                    <View style={styles.instructionsBtn}>
                        <View style={styles.linkView}>
                            <Feather name='link' size={20} color="#FFF" />
                        </View>
                        <View style={styles.instructionsView}>
                            <Text style={styles.instructionsText}>See instructions</Text>
                        </View>
                        
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
        </>
    )
}



export default Details