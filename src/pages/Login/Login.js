import React from 'react';

import { Text,
        View, 
        Image, 
        TouchableOpacity,
        TextInput,
        StyleSheet
} from 'react-native';
import styles from './styles';

const Login = ({navigation}) => {
return (
        <View style={styles.container}>

        <View style={styles.corpo}>
        <Image style={{ width:228, height:228}} source={require('../../../assets/login.png')}/>
        <TextInput placeholder="e-mail" style={styles.input}/>
        
        <TextInput placeholder="senha" secureTextEntry={true} style={styles.input}/>
        <TouchableOpacity style={styles.botao} 
            onPress={ () => navigation.navigate("PrimeiraTela")}>
            <Text style={styles.textBotao}> ENTRA </Text>
        </TouchableOpacity> 
        </View>
        
        
    </View>
)};

export default Login;