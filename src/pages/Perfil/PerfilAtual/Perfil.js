import { SafeAreaView, Image, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import React from 'react';
import styles from './styles';
import { SairPerfil } from '../components/ModalPerfil/SairEditarPerfil';

const Perfil = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.areaFotoPerfil}>
        <Image style={styles.fotoPerfil} source={require("../../../../assets/login.png")} />
        <Text style={styles.textoCabeçalho}> Olá, Fulana </Text>
      </View>
      <View style={styles.areaDados}>
        <View style={styles.areaTexto}>
          <Text style={styles.cabeçalhoTexto}>E-MAIL:</Text>
          <Text style={styles.texto} >FULANA@GMAIL.COM</Text>
        </View>
        <View style={styles.areaTexto}>
          <Text style={styles.cabeçalhoTexto}>GÊNERO:</Text>
          <Text style={styles.textoEmail} >FEMININO</Text>
        </View>
        <View style={styles.areaTexto}>
          <Text style={styles.cabeçalhoTexto}>DATA DE NASCIMENTO:</Text>
          <Text style={styles.textoEmail} >15/12/1998</Text>
        </View>
      </View>
      <View style={styles.areaBotoes}>
        <TouchableOpacity style={styles.botaoSalvar} onPress={() => navigation.navigate('EditarPerfil')}>
          <Text style={styles.textoSalvar}>EDITAR PERFIL</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.areaBotoes}>
      <SairPerfil/>
      </View>
    </SafeAreaView>
  )
}

export default Perfil;

