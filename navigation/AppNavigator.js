import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthTabs from './AuthTabs';

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <AuthTabs />
    </NavigationContainer>
  );
}
