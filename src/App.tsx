import React from 'react';
import { AuthGate } from './app/providers/AuthGate';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <AuthGate />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
