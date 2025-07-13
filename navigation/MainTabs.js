import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import TransportesScreen from '../screens/TransportesScreen';
import AjustesScreen from '../screens/AjustesScreen';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#fff',
        tabBarStyle: {
          backgroundColor: '#E65100',
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          height: 90,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 0,
          marginTop: 22,
        },
        tabBarIcon: ({ focused }) => {
          const iconSize = 25;
          const circleSize = 40;
          const iconColor = focused ? '#E65100' : '#fff';
          const bgColor = focused ? '#fff' : 'transparent';

          let icon = null;
          if (route.name === 'Inicio') {
            icon = <Ionicons name="home" size={iconSize} color={iconColor} />;
          } else if (route.name === 'Mapa') {
            icon = <Ionicons name="map" size={iconSize} color={iconColor} />;
          } else if (route.name === 'Transporte') {
            icon = <MaterialCommunityIcons name="bus" size={iconSize} color={iconColor} />;
          } else if (route.name === 'Ajustes') {
            icon = <Ionicons name="settings" size={iconSize} color={iconColor} />;
          }

          return (
            <View
              style={{
                width: circleSize,
                height: circleSize,
                borderRadius: circleSize / 2,
                backgroundColor: bgColor,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 20,
              }}
            >
              {icon}
            </View>
          );
        },
      })}
    >
      <Tab.Screen name="Inicio" component={HomeScreen} />
      <Tab.Screen name="Mapa" component={MapScreen} />
      <Tab.Screen name="Transporte" component={TransportesScreen} />
      <Tab.Screen name="Ajustes" component={AjustesScreen} />
    </Tab.Navigator>
  );
}