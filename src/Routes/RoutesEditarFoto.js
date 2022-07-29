import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { EditarPerfil } from '../pages/Perfil/EditarPerfil';
import {EditarFoto} from '../pages/Perfil/components/ModalPerfil/EditarFoto';
const Stack = createNativeStackNavigator();

const RoutesEditarFoto = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="EditarPerfil" component={EditarPerfil} options={{ headerShown: false }} />
            <Stack.Screen name="EditarFoto" component={EditarFoto} options={{ headerShown: false }} />
        </Stack.Navigator>

    )
}

export default RoutesEditarFoto;
