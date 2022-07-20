import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import styles from './styles';

const MenuHumor = () => {
  return (
    <ScrollView>
    <SafeAreaView>
      <TouchableOpacity style={styles.BotaoFechar}> 
      <Text style={styles.textoBotao}> X </Text>
      </TouchableOpacity>
      <View style={styles.Cabeçalho}>
      <Text style={styles.textoCabeçalho}> Como você está ?</Text>
      </View>
      <View>
        <Text>{data}</Text>
      </View>
      
  
    </SafeAreaView>
    </ScrollView>
  
)
}

export default MenuHumor

