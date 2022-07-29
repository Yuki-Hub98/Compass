import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import RoutePerfil from "./RoutePerfil";
import RouteCard from "./RouteCard";
import { New } from '../pages/OpcoesDeHumor';
import { Login } from '../pages/Login/';
import { Home } from '../pages/PrimeiraTela';
import { Card } from '../pages/Card';
import { MenuHumor } from '../pages/MenuHumor';
import BotaoNovo from "../components/BotaoNovo";
import BotaoHome from "../components/BotaoHome";
import BotaoConfiguracao from "../components/BotaoConfiguracao";



const Tab = createBottomTabNavigator();

function Tabs() {
    return (
        <Tab.Navigator>

            <Tab.Screen name="NewAdd" component={RouteCard} options={{
                headerShown: false,
                tabBarLabel: '',
                tabBarIcon: ({ focused, color }) =>
                    (<BotaoHome color={color} size={50} focused={focused} />)
            }}
            />

            <Tab.Screen name="MenuHumor" component={MenuHumor} options={{
                headerShown: false,
                tabBarLabel: '',
                tabBarIcon: ({ focused, color }) =>
                    (<BotaoNovo color={color} size={20} focused={focused} />)
            }}
            />

            <Tab.Screen name="Perfil" component={RoutePerfil} options={{
                headerShown: false,
                tabBarLabel: '',
                tabBarIcon: ({ focused, color }) =>
                    (<BotaoConfiguracao color={color} size={20} focused={focused} />)
            }}
            />


        </Tab.Navigator>
    )
}

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
                <Stack.Screen name='PrimeiraTela' component={Tabs} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}