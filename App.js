import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { ApolloProvider } from '@apollo/client';
import client from './config/graphql';
import Navigation from './components/navigation/Navigation';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 255, 255, 0.89)',
  },
};

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer theme={theme}>
        <Navigation />
      </NavigationContainer>
    </ApolloProvider>
  );
}
