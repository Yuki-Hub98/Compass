import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Ferramentas = () => {
  return (
    <View style={styles.container}>
      <Text>Ferramentas</Text>
    </View>
  )
}

export default Ferramentas

const styles = StyleSheet.create({
container:{
    flex:1,
    alignContent: 'center',
    alignItems: 'center',
}
})