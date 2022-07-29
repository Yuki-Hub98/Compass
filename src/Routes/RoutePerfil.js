import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { Perfil } from '../pages/Perfil/PerfilAtual';
import { EditarPerfil } from '../pages//Perfil/EditarPerfil';
import { Login } from "../pages/Login";

const Stack = createNativeStackNavigator();

export default function RoutePerfil() {

    return (

        <Stack.Navigator>
            <Stack.Screen name="Pefil" component={Perfil} options={{ headerShown: false }} />
            <Stack.Screen name="EditarPerfil" component={EditarPerfil} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}