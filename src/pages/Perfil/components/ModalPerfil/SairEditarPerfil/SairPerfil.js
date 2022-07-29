import { Modal, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const SairPerfil = () => {
    const [visivel, setVisivel] = useState(null);
    const navigation = useNavigation();

    return (
        <View>
            <Modal animationType='slide'
                transparent={true}
                visible={visivel}
            >
                <View style={styles.modalSair}>
                    <View style={styles.areaTexto}>
                        <Text style={styles.cabeçalho}>Atenção</Text>
                        <Text style={styles.corpo}>Deseja mesmo sair ?</Text>
                    </View>
                    <View style={styles.areaBotao}>
                        <TouchableOpacity onPress={() => setVisivel(false)}>
                            <Text style={styles.botaoCancelar}>CANCELAR</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                            <Text style={styles.botaoSair}>SAIR</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <View>
                <TouchableOpacity style={styles.sairModal} onPress={() => setVisivel(true)}>
                    <Text style={styles.textoSairModal}>SAIR</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SairPerfil;

