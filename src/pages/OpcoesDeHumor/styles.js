import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    tela:{
        backgroundColor:"#ACACAC",
        flex: 1,
        
    },
    botao:{
        backgroundColor: '#F4F6F9',
        borderRadius:20,
        marginTop:10,
        flexDirection:"row",
        paddingTop:10,
        paddingLeft:10,
        width:380,
        height:158
 },
    estado:{
        flexDirection:"row",
        alignItems:"baseline",
        marginLeft:10,
        
    },
    titulo: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#6F4E37",
        marginBottom: 16,
    },
    data: {
        alignItems: "center",
        fontSize: 16,
        color: "#ACACAC",
        marginLeft:10,

    },
    iconesBaixo:{
        
        flexDirection:"row",
        alignItems:'center',
        paddingTop:20,
        marginRight:80,
        alignContent:'flex-start'
        
        
    },
    hora: {
    fontSize:14,
    color: "#ACACAC",
    },
    textoBaixo:{
        fontWeight:"bold",
        color:'black',
        margin:10,
        
    },

    
})

export default styles;