import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import{ Entypo, Feather } from '@expo/vector-icons'

import Notification from './pages/Notification';
import Home from './pages/Home';
import New from './pages/New';
import Profile from './pages/Profile'
import Search from './pages/Search'

const Tab = createNativeStackNavigator();

export default function Routes(){
    return(
        <Tab.Navigator
        tabBarOptions={{
            style:{
                backgroundColor:'#121212',
                borderTopColor:'transparent',

            },
            activeTintColor:'#FFF',
            //inactiveTintColor:'#'
            tabStyle:{
                paddingBottom: 5,
                paddingTop: 5,
            }

        }}
        >
            <Tab.Screen
            nome='Inicio'
            component={Home}
            options={{
            tabBarIcon: ({ size, color }) => (
                <Entypo nome='home' size={size} color={color}/>
            )
        }}
            />
            <Tab.Screen
            nome='Novo'
            component={New}
            options={{
                tabBarIcon:({size, color}) => (
                    <Feather nome='search' size={size} color={color}/>
                )
            }}
            />
            <Tab.Screen 
            nome='Notificação'
            component={Notification}
            options={{
                tabBarIcon:({ size, color}) => (
                    null
                )
            }}
            />
            <Tab.Screen
            nome='Perfil'
            component={Profile}
            options={{
                tabBarIcon:({ size, color}) => (
                    <Entypo nome='notification' size={size} color={color}/>
                )
            }}
            />
            <Tab.Screen 
            nome='Pesquisa'
            component={Search}
            options={{
                tabBarIcon:({ size, color}) => (
                    <Feather nome='user' size={size} color={color}/>
                )
            }}
            />
        </Tab.Navigator>
    );
}