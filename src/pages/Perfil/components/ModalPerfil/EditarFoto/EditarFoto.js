import { Modal, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const EditarFoto = () => {
    const [id, setId] = useState(0);
    const [visivel, setVisivel] = useState(null);
    const clickFoto = (key, id) => {
        setId(key)
        if (key === id) {
            setId(0)
        }
    }

    return (
        <View>
            <TouchableOpacity style={styles.botaoAlterarfoto} onPress={() => setVisivel(true)}>
                <Text style={styles.textoBotaoFoto}>
                    Alterar Foto
                </Text>
            </TouchableOpacity>
            <Modal animationType='slide'
                visible={visivel}>
                <TouchableOpacity style={styles.botaoSair} onPress={() => setVisivel(false)}>
                    <Text style={styles.textoBotaoFechar}> X </Text>
                </TouchableOpacity>
                <Text style={styles.textoCabeçalho}> Selecione a foto de perfil </Text>

                <View style={styles.grupoAreaFoto}>
                        <TouchableOpacity onPress={() => clickFoto(1, id)} style={[styles.clickFoto, {backgroundColor : id === 1 ? "#304FFE" : "white"}]}>
                            <Image style={styles.fotoEditar} source={require('../../../../../../assets/humores/radiant.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => clickFoto(2, id)} style={[styles.clickFoto, {backgroundColor : id === 2 ? "#304FFE" : "white"}]}>
                            <Image style={styles.fotoEditar} source={require('../../../../../../assets/humores/happy.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => clickFoto(3, id)} style={[styles.clickFoto, {backgroundColor : id === 3 ? "#304FFE" : "white"}]}>
                            <Image style={styles.fotoEditar} source={require('../../../../../../assets/humores/ok.png')} />
                        </TouchableOpacity>
                </View>
                <View style={styles.grupoAreaFoto}>
                        <TouchableOpacity onPress={() => clickFoto(4, id)} style={[styles.clickFoto, {backgroundColor : id === 4 ? "#304FFE" : "white"}]}>
                            <Image style={styles.fotoEditar} source={require('../../../../../../assets/humores/sad.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => clickFoto(5, id)} style={[styles.clickFoto, {backgroundColor : id === 5 ? "#304FFE" : "white"}]}>
                            <Image style={styles.fotoEditar} source={require('../../../../../../assets/humores/terrible.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => clickFoto(6, id)} style={[styles.clickFoto, {backgroundColor : id === 6 ? "#304FFE" : "white"}]}>
                            <Image style={styles.fotoEditar} source={require('../../../../../../assets/login.png')} />
                        </TouchableOpacity>
                </View>
                <View style={styles.areaBotaoConfirmar}>
                <TouchableOpacity style={styles.botaoConfirmar} onPress={() => setVisivel(false)}>
                    <Text style={styles.textoBotaoConfirmar}>CONFIRMAR</Text>
                </TouchableOpacity>
                </View>
                

            </Modal>
        </View>

    )
}

export default EditarFoto

