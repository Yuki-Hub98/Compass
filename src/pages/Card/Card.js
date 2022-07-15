import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { New } from '../OpcoesDeHumor';
import { Humor, listaDeHumor } from '../OpcoesDeHumor/ListadeHumor';
import styles from './styles';
import { useRoute } from '@react-navigation/native';

export default function Card() {

  const route = useRoute();
  const { imagem, data, status, horario, 
    imagemFesta, imagemEsporte, imagemCozinhar,
    festa, esporte, cozinhar, frase} = route.params;

return (
  <View style={styles.container}>
    <View style={styles.topo}>
    <Text> {horario} </Text>
    <Text> {data} </Text>
    </View>

    <View style={styles.cabecalho}>
    <Image source={imagem} style={{width: 70, height: 70}}/>
    <Text style={[styles.textoStatus, {color:HumorColors[status]}]}> {status}</Text>
    </View>
    
    <View style={styles.area}>
    <View style={styles.icones}>
    <Image source={imagemFesta} style={{width: 20, height: 20}}/>
    <Image source={imagemEsporte} style={{width: 20, height: 20}}/>
    <Image source={imagemCozinhar} style={{width: 20, height: 20}}/>
    </View>
    <View style={styles.textIcone}>
    <Text>{festa}</Text>
    <Text> {esporte} </Text>
    <Text> {cozinhar}</Text>
    </View>
    </View>
    <View style={styles.frase}>
      <Text>{frase}</Text>
    </View>
  </View>
)
}
const HumorColors = {
  BEM:'#E24B4B',
  MAL:'#4B75E2',
  TRISTE:'#4BE263',
  OK:'#969696',
  RADIANTE:'#FFD700',
}

