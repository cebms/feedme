import React from 'react';
import { StyleSheet } from 'react-native';
import { AppLoading } from 'expo'
import { Ubuntu_300Light, Ubuntu_700Bold, useFonts } from '@expo-google-fonts/ubuntu'

import Routes from './src/routes'

export default function App() {
  let [fontsLoaded] = useFonts({
    Ubuntu_300Light,
    Ubuntu_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Routes />
  );
}
