import React, { useState } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthTabs from './AuthTabs';
import SurveyScreen from '../screens/SurveyScreen';
import RouteSetupScreen from '../screens/RouteSetupScreen';
import MainTabs from './MainTabs';
import EcoviaScreen from '../screens/EcoviaScreen';
import MetroScreen from '../screens/MetroScreen';
import TroleScreen from '../screens/TroleScreen';
import AutobusScreen from '../screens/AutobusScreen';
import MetrobusScreen from '../screens/MetrobusScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [surveyCompleted, setSurveyCompleted] = useState(false);
  const [routeConfigured, setRouteConfigured] = useState(false);
  const [isNewUser, setIsNewUser] = useState(false);

  let initialRoute = 'Auth';
  if (isAuthenticated && isNewUser && !surveyCompleted) initialRoute = 'Survey';
  else if (isAuthenticated && isNewUser && !routeConfigured) initialRoute = 'RouteSetup';
  else if (isAuthenticated) initialRoute = 'MainTabs';

  return (
    <NavigationContainer>
      <View style={{ flex: 1, backgroundColor: '#00665A' }}>
        <View
          style={{
            alignItems: 'center',
            marginTop: 5,
            marginBottom: 10,
            backgroundColor: '#00665A',
            paddingVertical: 16,
            borderRadius: 16,
          }}
        />
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={initialRoute}>
          <Stack.Screen name="Auth">
            {() => (
              <AuthTabs
                setIsAuthenticated={setIsAuthenticated}
                setIsNewUser={setIsNewUser}
                setSurveyCompleted={setSurveyCompleted}
                setRouteConfigured={setRouteConfigured}
              />
            )}
          </Stack.Screen>
          <Stack.Screen name="Survey">
            {() => <SurveyScreen setSurveyCompleted={setSurveyCompleted} />}
          </Stack.Screen>
          <Stack.Screen name="RouteSetup">
            {() => <RouteSetupScreen setRouteConfigured={setRouteConfigured} />}
          </Stack.Screen>
          <Stack.Screen name="MainTabs" component={MainTabs} />
          <Stack.Screen name="EcoviaScreen" component={EcoviaScreen} />
          <Stack.Screen name="MetroScreen" component={MetroScreen} />
          <Stack.Screen name="TroleScreen" component={TroleScreen} />
          <Stack.Screen name="AutobusScreen" component={AutobusScreen} />
          <Stack.Screen name="MetrobusScreen" component={MetrobusScreen} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}