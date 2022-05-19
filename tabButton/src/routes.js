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
            <Tab.Screen nome='Inicio' component={Home}/>
            <Tab.Screen nome='Novo' component={New}/>
            <Tab.Screen nome='Notificação' component={Notification}/>
            <Tab.Screen nome='Perfil' component={Profile}/>
            <Tab.Screen nome='Pesquisa' component={Search}/>
        </Tab.Navigator>
    );
}