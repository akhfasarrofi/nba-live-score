import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const TeamsScreen = () => (
  <View style={styles.container}>
    <Text>Teams!</Text>
  </View>
);

export default TeamsScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
