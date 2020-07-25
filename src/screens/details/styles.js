import React from 'react'
import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        marginTop: Constants.statusBarHeight,
        paddingTop: 5,
        marginBottom: 10,
        marginLeft: 10
    },
    headerText: {
        fontFamily: 'Ubuntu_700Bold',
        fontSize: 18,
        alignSelf: 'center'
    },
    titleView: {
        flex: 1, 
        justifyContent: "center",
        alignItems:'center',
        paddingRight: 10,
        marginLeft: 10
    },
    banner: {
        height: 139,
        width: '100%',
        marginBottom: 5
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
        paddingTop: '3%',
        alignItems: 'center',
        marginBottom: 20,
        
    },
    linkView: {
        backgroundColor: '#43BCCD',
        height: '100%',
        width: 48,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 16,
        borderBottomLeftRadius: 16
    },
    instructionsBtn : {
        flexDirection: 'row',
        backgroundColor: '#662E9B',
        borderRadius: 16,
        height: 50,
        width: 250,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    instructionsView: {
        flex:1,
        alignItems: 'center'
    },
    instructionsText: {
        color: '#FFF',
        fontSize: 20,
        fontFamily: 'Ubuntu_700Bold',
    },
    listView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 3,
        marginHorizontal: 8
    },
    listItem: {
        fontFamily: 'Ubuntu_300Light',
        fontSize: 16
    }
})

export default styles