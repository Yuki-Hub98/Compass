import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import React from 'react';


const Home = () => {
  return (

    <SafeAreaView style={styles.container}>
      <View style={styles.corpo}>

        <Icon name='sentiment-neutral' size={50} color={'#c0c0c0'} />

        <Text style={styles.texto}>
          Você ainda não tem nenhum
          registro diário. Para começar,
          toque no ícone de adicionar na tela.
        </Text>
      </View>

    </SafeAreaView>

  )
}

export default Home;
