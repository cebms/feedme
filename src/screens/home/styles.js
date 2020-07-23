import React from 'react'
import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight + 5
    },
    header: {
        alignItems: 'center',
    },
    pageName: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: '4%',
        fontFamily: 'Ubuntu_300Light'
    },
    welcome: {
        alignSelf: 'flex-start',
        marginLeft: '5%',
        color: '#41414d',
        fontSize: 18,
        fontFamily: 'Ubuntu_700Bold'
        }
})

export default styles