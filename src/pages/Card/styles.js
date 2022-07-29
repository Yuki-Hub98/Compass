import { StyleSheet } from "react-native"


const styles = StyleSheet.create({
    botaoVoltar:{
        margin:20,
        backgroundColor:'rgba(48, 79, 254, 0.1)',
        width:30,
        borderRadius:10
    },
    container: {
        height: '100%',
        backgroundColor: '#E5E5E5'
    },
    topo: {
        alignItems: 'center',
        paddingTop: 36
    },
    cabecalho: {
        alignItems: 'center',
        paddingTop: 32
    },
    textoStatus: {
        fontSize: 20,
    },
    area: {
        marginTop: 36,
        width: 380,
        height: 160,
        borderRadius: 20,
        backgroundColor: 'white',
        justifyContent: 'center',

    },
    grupoIcones: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingTop: 58

    },
    formatoIcone: {
        width: 50,
        height: 50,
        borderRadius: 30,
        backgroundColor: '#304FFE',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icones: {
        width: 20,
        height: 20,
        tintColor: '#ffff'
    },
    grupoTexto: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        fontWeight: "bold",
        color: 'black',
        margin: 10,
        marginLeft: 12

    },
    formatoTexto: {
        fontWeight: "bold",
        color: 'black',
        marginLeft: 10

    },
    frase: {
        marginTop: 21,
        backgroundColor: 'white',
        width: 380,
        height: 89,
        alignItems: 'center',
        justifyContent: "center",
        borderRadius: 20
    },


})

export default styles;