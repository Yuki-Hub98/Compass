
import { StyleSheet} from 'react-native'
import React from 'react'

const styles = StyleSheet.create({
    botaoAlterarfoto: {
        width: 182,
        height: 44,
        backgroundColor: 'rgba(48, 79, 254, 0.14)',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textoBotaoFoto: {
        color: '#304FFE',
        fontWeight: 'bold',
    },

    botaoSair: {
        width:36,
        height:36,
        backgroundColor:'rgba(48, 79, 254, 0.1)',
        margin:20,
        borderRadius:10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textoBotaoFechar:{
        color: '#304FFE',
        fontWeight: 'bold',
        fontSize:20
    },
    textoCabeçalho:{
        paddingTop:63,
        paddingBottom:37,
        textAlign: 'center',
        fontWeight: 'bold',
        color:'black',
        fontSize:24

    },
    grupoAreaFoto:{
        paddingTop:20,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center' 
    },
    clickFoto:{
        alignItems: 'center',
        justifyContent: 'center',
        width:102,
        height:102,
        borderRadius:50
    },
    fotoEditar: {
        width:92,
        height: 92,
        },
        areaBotaoConfirmar: {
            paddingTop: 200,
            alignItems: 'center',
            justifyContent: 'center'
        },
    botaoConfirmar:{
        width:322,
        height:52,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#304FFE'
    },
    textoBotaoConfirmar: {
        fontWeight:'bold',
        color:'white',
    }
    })

export default styles;