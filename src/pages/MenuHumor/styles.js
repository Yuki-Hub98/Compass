import { StyleSheet } from 'react-native'
import React from 'react'



const styles = StyleSheet.create({
    container: {
        backgroundColor:'white',
    },
    BotaoFechar: {
        backgroundColor: 'rgba(48, 79, 254, 0.1)',
        width: 36,
        height: 36,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20
    },
    textoBotaoFechar: {
        color: '#304FFE',
        fontSize:20

    },
    cabeçalho: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    textoCabeçalho: {
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold',
    },
    dataEhora: {
        marginTop: 12,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    emotionCabeçalho: {
        marginTop: 65,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },

    tamanhoEmotion: {
        width: 43,
        height: 43
    },
    formatoEmotion: {
        width: 50,
        height: 50,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    areaTextoEmotion: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    textoEmotion: {
        fontSize: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    areaIcones: {
        marginLeft:20,
        marginTop: 71.41,
        width: 350,
        height: 470,
        borderRadius: 25,
        borderColor: '#000000',
        backgroundColor:'white',
        borderWidth: 1
    },
    grupoIcones: {
        marginTop: 70,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',

    },
    botaoIcone:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    posiçãoIcones: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    areaTextoEmotion:{
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    textoIcone: {
        color: 'black',
        fontSize: 12
    },
    tamanhoIcones: {
        width: 35.75,
        height: 35.75
    },
    formatoIcone: {
        width:50,
        height:50,
        borderRadius:30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        marginTop:20,
        borderWidth: 1,
        width: 350,
        height: 100,
        borderRadius: 25,
        justifyContent: 'flex-start',
        paddingBottom: 60,
        marginLeft: 20,

    },
    botaoSalvar: {
        width: 350,
        height: 52,
        backgroundColor: '#304FFE',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 10,
        marginLeft: 20

    },
    textoBotaoSalvar: {
        fontWeight: 'bold',
        color: '#FFFFFF',
    }


})


export default styles;