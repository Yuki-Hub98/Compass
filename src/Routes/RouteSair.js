import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { SairPerfil } from '../pages/Perfil/components/ModalPerfil/SairEditarPerfil';
import { Login } from '../pages/Login';

const Stack = createNativeStackNavigator();

const RouteSair = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="SairPerfil" component={SairPerfil} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default RouteSair

