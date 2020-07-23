import React from 'react'
import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        alignItems: 'flex-start'
    },
    banner: {
        height: 139,
        width: 411
    },
    name: {
        fontFamily: 'Ubuntu_700Bold',
        fontSize: 24,
        marginHorizontal: '3%'
    },
    info: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        marginTop: '2%'
    },
    logos: {
        marginRight: 10
    },
    tag1: {
        flexDirection: 'row',
        marginLeft: '3%',
        alignItems: 'center'
    },
    tag2: {
        flexDirection: 'row',
        marginRight: '40%',
        alignItems: 'center'
    },
    tagText: {
        fontFamily: 'Ubuntu_700Bold'
    },
    line: {
        height: 1,
        width: '80%',
        borderWidth: 1,
        borderColor: '#662E9B',
        alignSelf: 'center',
        marginTop: 16
    },
    ingredients: {
        
        paddingTop: '3%'
    },
    topicText: {
        fontFamily: 'Ubuntu_700Bold',
        color: '#41414D',
        fontSize: 18,
        paddingLeft: '3%'
    },
    instructions: {
        paddingTop: '3%'
    }
})

export default styles