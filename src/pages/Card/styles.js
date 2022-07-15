import { StyleSheet } from "react-native"


const styles = StyleSheet.create({
container: {
    height:'100%',
    backgroundColor:'#E5E5E5'
    },
topo:{
    alignItems: 'center',
    paddingTop:36
    },
cabecalho:{
    alignItems: 'center',
    paddingTop:32
    },
textoStatus: {
    fontSize:20,
    },
area:{
    marginTop:36,
    width:380,
    height:160,
    borderRadius:20,
    backgroundColor:'white',
    },
icones:{
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'space-evenly',
    paddingTop:58
    
    },
textIcone:{
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'space-evenly',
    fontWeight:"bold",
    color:'black',
    margin:10,
    marginLeft:12

    },
    frase:{
        marginTop:21,
        backgroundColor:'white',
        width:380,
        height:89,
        alignItems:'center',
        justifyContent:"center",
        borderRadius:20
    }
})

export default styles;