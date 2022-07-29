import React, { useState } from 'react';

import {
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    StyleSheet
} from 'react-native';
import api from '../../services/api';

import styles from './styles';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');


    const postLogin = async () => {
        await api.post('/oauth/token', {
            'grant_type':'password',
            'email': email,
            'password' : senha,
            'client_id' : '3mGWGtxIEKyhq_HGG4cq6hsTOd_zn1SuTD3_cafjUPc',
            'client_secret':'389JLi1Nd6DQ_soCI85C57ueTlMZ_JR7pRq6SJ0GaB0'
    }).then((recebeResposta)=>{
    api.defaults.headers.common['Authorization'] = 'Bearer ' + recebeResposta.data.access_token
        navigation.navigate("PrimeiraTela")
    
    })
    .catch( (error)=>{console.log(error)})
    }
    return (
        <View style={styles.container}>

            <View style={styles.corpo}>
                <Image style={{ width: 228, height: 228 }} source={require('../../../assets/login.png')} />
                <TextInput placeholder="e-mail" style={styles.input} onChangeText={(email)=>{setEmail(email)}} />

                <TextInput placeholder="senha" secureTextEntry={true} style={styles.input} onChangeText={(senha)=>{setSenha(senha)}}/>
                <TouchableOpacity style={styles.botao}
                    onPress={() => {postLogin()}}>
                    <Text style={styles.textBotao}> ENTRA </Text>
                </TouchableOpacity>
            </View>


        </View>
    )
};

export default Login;