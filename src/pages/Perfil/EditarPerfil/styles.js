import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#F5F5F5'
    },
    areaFoto: {
        paddingTop:84,
        alignItems: 'center',
        justifyContent: 'center'
    },
    foto: {
        width: 128,
        height: 129
    },
    areaBotao: {
        paddingTop:39,
        alignItems: 'center',
        justifyContent: 'center'
    },
    
    areaInformações: {
        marginLeft:35,
        paddingTop:50
    },
    textoInformações: {
        fontWeight:'bold',
        fontSize:15,
        color:'#000000',
    },
    inputInformações: {
        width:322,
        height:45,
        backgroundColor:'white',
    },
    areaBotãoSalvar: {
        paddingTop:35,
        alignItems: 'center',
    },
    botãoSalvar: {
        width:322,
        height:45,
        backgroundColor:'#304FFE',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textoSalvar: {
        color: '#FFFFFF',
        fontWeight: 'bold',

    }

})

export default styles;