import { Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import React,{ useState } from 'react';
import styles from './styles';
import {EditarFoto} from '../components/ModalPerfil/EditarFoto/';


const EditarPerfil = ({ navigation}) => {

  return (
    <View style={styles.container}>
      <View style={styles.areaFoto}>
        <Image style={styles.foto} source={require('../../../../assets/login.png')} />
      </View>
      <View style={styles.areaBotao}>
        <EditarFoto/>
      </View>
      <View style={styles.areaInformações}>
        <Text style={styles.textoInformações}>NOME</Text>
        <TextInput style={styles.inputInformações} />
        <Text style={styles.textoInformações}>E-MAIL</Text>
        <TextInput style={styles.inputInformações} />
        <Text style={styles.textoInformações}>GÊNERO</Text>
        <TextInput  placeholder="FEMININO"  style={styles.inputInformações} />
        <Text style={styles.textoInformações}>DATA DE NASCIMENTO</Text>
        <TextInput style={styles.inputInformações} />
      </View>
      <View style={styles.areaBotãoSalvar}>
        <TouchableOpacity style={styles.botãoSalvar}>
          <Text style={styles.textoSalvar}>SALVAR</Text>
        </TouchableOpacity>
      </View>
    </View>

  )
}

export default EditarPerfil;

