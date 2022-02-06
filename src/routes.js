import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './pages/Home';
import Source from './pages/Source';
import Search from './pages/Search';
import Tips from './pages/Tips';
import Config from './pages/Config';
import { Entypo, Feather} from '@expo/vector-icons'; 


const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarActiveBackgroundColor:'#000',                                
            tabBarActiveTintColor: '#B24BF3',
            tabBarInactiveTintColor: '#695E93',            
        })}
        >
            <Tab.Screen 
            name="Home" 
            component={Home}
            options={{
                tabBarIcon: ({size,color}) => (
                    <Entypo name="home" size={size} color={color}/>
                )
            }}
            />
           
            <Tab.Screen 
            name="Fontes" 
            component={Source}
            options={{                
                tabBarIcon: ({size,color}) => (
                    <Entypo name="news" size={size} color={color}/>
                )
            }}
            />
             <Tab.Screen 
            name="Procurar" 
            component={Search}
            options={{
                tabBarIcon: ({focused, size,color}) => (
                    <Feather name="search" size={size} color={color}/>
                )
            }}
            />
            <Tab.Screen 
            name="Dicas" 
            component={Tips}
            options={{
                tabBarIcon: ({size,color}) => (
                    <Entypo name="light-bulb" size={size} color={color}/>
                )
            }}
            />
            <Tab.Screen 
            name="Config" 
            component={Config}
            options={{
                tabBarIcon: ({size,color}) => (
                    <Feather name="settings" size={size} color={color}/>
                )
            }}
            />
        </Tab.Navigator>
    )
}