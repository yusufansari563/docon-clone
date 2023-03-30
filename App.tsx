// This is full code for App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import ErrorBoundary from './src/ErrorBoundry';
import Root from './src/presentation/navigation/Root';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <ErrorBoundary>
      <SafeAreaProvider>
        <NavigationContainer>
          <Root />
        </NavigationContainer>
      </SafeAreaProvider>
    </ErrorBoundary>
  );
}
