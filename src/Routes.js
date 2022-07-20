import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import RouteCard from "./RouteCard";
import {New} from '../src/pages/OpcoesDeHumor';
import {Login} from  '../src/pages/Login/';
import {Home} from '../src/pages/PrimeiraTela';
import {Card} from '../src/pages/Card';
import {Ferramentas} from '../src/pages/Ferramentas';
import BotaoNovo from "./components/BotaoNovo";
import BotaoHome from "./components/BotaoHome";
import BotaoConfiguracao from "./components/BotaoConfiguracao";



const Tab = createBottomTabNavigator();

function Tabs(){
return(
    <Tab.Navigator>

<Tab.Screen name="Home" component={Home} options={{ 
        headerShown: false,
        tabBarLabel:'', 
        tabBarIcon: ({focused,color}) =>
        (<BotaoHome color={color} size= {20} focused={focused} />)
        }}
        />

<Tab.Screen name="NewAdd" component={RouteCard}  options={{ 
        headerShown: false,
        tabBarLabel:'',
        tabBarIcon: ({focused, color}) =>
        (<BotaoNovo color={color} size= {50} focused={focused} />)
        }}
        />


        <Tab.Screen name="Ferramentas" component={Ferramentas} options={{
        headerShown: false,
        tabBarLabel:'',
        tabBarIcon: ({ focused,color}) =>
        (<BotaoConfiguracao color={color} size= {20} focused={focused}/>)
        }}
        /> 

        
    </Tab.Navigator>
)}

const Stack = createNativeStackNavigator();

export default function Routes(){
    return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Login' component={Login} options={{ headerShown: false }}/>
            <Stack.Screen name='PrimeiraTela' component={Tabs} options={{ headerShown: false }}/>
        </Stack.Navigator>
    </NavigationContainer>
)}