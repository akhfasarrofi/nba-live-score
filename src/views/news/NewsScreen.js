import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const GamesScreen = () => (
  <View style={styles.container}>
    <Text>News!</Text>
  </View>
);

export default GamesScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
