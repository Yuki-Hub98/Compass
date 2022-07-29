import { Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles';
import { useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

export default function Card() {
  const Navigation = useNavigation()
  const route = useRoute();
  const { imagem, data, status, horario,
    imagemFesta, imagemEsporte, imagemCozinhar,
    festa, esporte, cozinhar, frase } = route?.params;

  return (
    <View style={styles.container}>
                <TouchableOpacity style={styles.botaoVoltar}
                onPress={() => Navigation.goBack()}>
                <Icon color="#304FFE" name='chevron-left'
                size={30}/>

            </TouchableOpacity>
      <View style={styles.topo}>
        <Text> {horario} </Text>
        <Text> {data} </Text>
      </View>

      <View style={styles.cabecalho}>
        <Image source={imagem} style={{ width: 70, height: 70 }} />
        <Text style={[styles.textoStatus, { color: HumorColors[status] }]}> {status}</Text>
      </View>

      <View style={styles.area}>
        <View style={styles.grupoIcones}>
          <View style={styles.formatoIcone}>
            <Image source={imagemFesta} style={styles.icones} />
          </View>
          <View style={styles.formatoIcone}>
            <Image source={imagemEsporte} style={styles.icones} />
          </View>
          <View style={styles.formatoIcone}>
            <Image source={imagemCozinhar} style={styles.icones} />
          </View>

        </View>
        <View style={styles.grupoTexto}>
          <Text style={styles.formatoTexto}>{festa}</Text>
          <Text style={[styles.formatoTexto, { marginLeft: 20 }]}>{esporte} </Text>
          <Text style={styles.formatoTexto}>{cozinhar}</Text>
        </View>
      </View>
      <View style={styles.frase}>
        <Text>{frase}</Text>
      </View>
    </View>
  )
}
const HumorColors = {
  BEM: '#E24B4B',
  ACABADO: '#4B75E2',
  TRISTE: '#4BE263',
  OK: '#969696',
  RADIANTE: '#FFD700',
}

