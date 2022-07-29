import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { Card } from '../pages/Card';
import { New } from '../pages/OpcoesDeHumor';

const Stack = createNativeStackNavigator();

export default function RouteCard() {

    return (

        <Stack.Navigator>
            <Stack.Screen name="New" component={New} options={{ headerShown: false }} />
            <Stack.Screen name="Card" component={Card} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}