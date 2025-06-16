import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

const Tab = createMaterialTopTabNavigator();

export default function AuthTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#E65100',
        tabBarInactiveTintColor: '#fff',
        tabBarLabelStyle: { fontSize: 16, textTransform: 'none' },
        tabBarStyle: { backgroundColor: '#00665A' },
        tabBarIndicatorStyle: { backgroundColor: '#E65100' },
      }}
    >
      <Tab.Screen name="Login" component={LoginScreen} />
      <Tab.Screen name="Register" component={RegisterScreen} />
    </Tab.Navigator>
  );
}