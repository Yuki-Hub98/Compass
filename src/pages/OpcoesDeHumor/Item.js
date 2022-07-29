import { Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

export function Item({ imagem, data, status, horario,
    imagemFesta, imagemEsporte, imagemCozinhar,
    festa, esporte, cozinhar, frase }) {

    const navigation = useNavigation();

    return (
        <View style={styles.tela}>
            <TouchableOpacity style={styles.botao}
                onPress={() => navigation.navigate('Card', {
                    imagem: imagem,
                    data: data,
                    status: status,
                    horario: horario,
                    imagemFesta: imagemFesta,
                    imagemEsporte: imagemEsporte,
                    imagemCozinhar: imagemCozinhar,
                    festa: festa,
                    esporte: esporte,
                    cozinhar: cozinhar,
                    frase: frase,
                })}>
                <Image style={{ width: 70, height: 70 }} source={imagem} />

                <View style={styles.container}>

                    <Text style={styles.data}> {data}</Text>

                    <View style={styles.estado}>
                        <Text style={[styles.titulo, { color: HumorColors[status] }]}> {status} </Text>
                        <Text style={styles.hora}> {horario}</Text>
                    </View>

                    <View style={styles.grupoIcones}>
                        <Image style={styles.icones} source={imagemFesta} />
                        <Text style={styles.textoBaixo}> {festa}</Text>
                        <Text style={styles.pontinho}>• </Text>
                        <Image style={styles.icones} source={imagemEsporte} />
                        <Text style={styles.textoBaixo}>{esporte}</Text>
                        <Text style={styles.pontinho}>• </Text>
                        <Image style={styles.icones} source={imagemCozinhar} />
                        <Text style={styles.textoBaixo}>{cozinhar}</Text>
                    </View>

                    <Text>{frase.substring(0, 33)}</Text>
                </View>

            </TouchableOpacity>
        </View>
    )
};
const HumorColors = {
    BEM: '#E24B4B',
    ACABADO: '#4B75E2',
    TRISTE: '#4BE263',
    OK: '#969696',
    RADIANTE: '#FFD700',
}

