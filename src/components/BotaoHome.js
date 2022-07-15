import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import Icons from 'react-native-vector-icons/MaterialIcons'

export default function BotaoHome({focused}){
return (
    <View style={[styles.container, {backgroundColor: focused ? '#304FFE' : '#E5E5E5'}]}>
        <Icons name="home" color={focused ? '#FFF' : '#304FFE'} size={20} />
    </View>
)
}


const styles = StyleSheet.create({
container:{
marginTop:20,
width:48,
height:40,
borderRadius:15,
alignItems: 'center',
justifyContent: 'center',
}

})