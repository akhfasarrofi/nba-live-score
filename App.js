import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import Navigation from './src/views/layout/navigation/Navigation';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 255, 255, 0.89)',
  },
};

export default function App() {
  return (
    <NavigationContainer theme={theme}>
      <Navigation />
    </NavigationContainer>
  );
}
