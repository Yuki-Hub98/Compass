import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import Icons from 'react-native-vector-icons/MaterialIcons'

export default function BotaoNovo({focused}){
  return (
    <View style={[styles.container, {backgroundColor: focused ? '#304FFE' : '#E5E5E5'}]}>
    <Icons name="add" color={focused ? '#FFF' : '#304FFE'} size={50} />
    </View>
  )
}


const styles = StyleSheet.create({
container:{
  marginTop:20,
  width:52,
  height:52,
  borderRadius:30,
  alignItems: 'center',
  justifyContent: 'center',
}

})