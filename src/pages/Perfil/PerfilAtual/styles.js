import { StyleSheet } from "react-native"


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5F5F5'
    },
    areaFotoPerfil: {
        marginTop: 84,
        justifyContent: 'center',
        alignItems: "center",
    },
    fotoPerfil: {
        width: 128,
        height: 129
    },
    textoCabeçalho: {
        paddingTop: 46,
        fontSize: 35,
        color: 'black'
    },
    areaDados: {
        marginTop: 17,
        marginLeft: 42

    },
    areaTexto: {
        flexDirection: 'row'
    },
    cabeçalhoTexto: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 15
    },
    areaBotoes: {
        marginTop: 19,
        alignItems: 'center',

    },
    botaoSalvar: {
        width: 343,
        height: 52,
        borderRadius: 6,
        backgroundColor: "#304FFE",
        alignItems: 'center',
        justifyContent: 'center'
    },
    botaoSair: {
        width: 343,
        height: 52,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    textoSalvar: {
        color: 'white',
        fontWeight: 'bold',
    },
    textoSair: {
        color: 'black',
        fontWeight: 'bold',
    },




})

export default styles;