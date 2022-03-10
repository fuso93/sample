import React, {useState} from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Search,Profile, Home, Chat,Story } from "./screens";
import {NavigationContainer} from "@react-navigation/native";
import {Ionicons} from "@expo/vector-icons";
import {SafeAreaView} from "react-native";

const Tab = createBottomTabNavigator();
const App = () => {
    return (
        <NavigationContainer>
            <SafeAreaView>
                Hello Hello
            </SafeAreaView>
            <Tab.Navigator
                screenOptions={({route}) => ({
                   tabBarIcon:({focused, color, size}) => {
                       let iconName;
                       if (route.name === "Search") {
                           iconName = focused
                               ? ('search')
                               : ('search' , color='#FFC0CB')
                       } else if (route.name === "Story") {
                           iconName = focused
                               ? ('heart-outline')
                               : ('heart-outline', color='#FFC0CB')
                       } else if (route.name === "Home") {
                           iconName = focused
                               ? ('home-outline')
                               : ('home-outline', color='#FFC0CB')
                       } else if (route.name === "Chat") {
                           iconName = focused
                               ? ('chatbubble-ellipses-outline')
                               : ('chatbubble-ellipses-outline', color='#FFC0CB')
                       } else {
                           iconName = focused
                               ? ('md-person-outline')
                               : ('md-person-outline', color='#FFC0CB')
                       }
                       return <Ionicons name={iconName} size={size} color={color}/>
                   },
                       tabBarActiveTintColor: 'tomato',
                       tabBarInactiveTintColor : 'lightGray'

                })}
            >
                <Tab.Screen name={'Search'} component={Search}/>
                <Tab.Screen name={'Story'} component={Story}/>
                <Tab.Screen name={'Home'} component={Home}/>
                <Tab.Screen name={'Chat'} component={Chat}/>
                <Tab.Screen name={'Profile'} component={Profile}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default App;