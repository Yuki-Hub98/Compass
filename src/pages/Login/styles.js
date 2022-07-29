import { StyleSheet } from "react-native"


const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: "#304FFE",
    },
    corpo: {
        marginTop: 100,
        alignItems: 'center',

    },
    input: {
        backgroundColor: '#F6F6F6',
        padding: 10,
        fontWeight: "bold",
        width: 321,
        height: 46,
        borderRadius: 10,
        marginTop: 21,
        alignItems: 'center',
        fontStyle: '#969696'

    },
    botao: {
        fontFamily: 'Source Sans Pro',
        color: '#304FFE',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#C6CEFF',
        marginTop: 68,
        width: 160,
        height: 46,
        borderRadius: 10,
    },
    textBotao: {
        color: '#304FFE'
    }
})

export default styles;