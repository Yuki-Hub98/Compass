import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    modalSair: {
        marginTop: 300,
        alignSelf: 'center',
        width: 319,
        height: 147,
        backgroundColor: '#FFFFFF',
        borderRadius: 20
    },
    areaTexto: {
        padding: 10
    },
    cabeçalho: {
        fontWeight: 'bold',
        fontSize: 20,
        fontFamily: 'Source Sans Pro'
    },
    corpo: {
        color: '#969696'
    },
    areaBotao: {
        paddingTop: 50,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        paddingRight: 20
    },
    botaoCancelar: {
        paddingRight: 8,
        fontWeight: 'bold',
    },
    botaoSair: {
        fontWeight: 'bold',
    },
    sairModal: {
        width: 343,
        height: 52,
        borderRadius: 6,
        backgroundColor: "#FFFFFF",
        alignItems: 'center',
        justifyContent: 'center'
    },
    textoSairModal: {
        fontWeight: 'bold',
    }




})

export default styles; 