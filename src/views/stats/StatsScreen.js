import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const StatsScreen = () => (
  <View style={styles.container}>
    <Text>Stats!</Text>
  </View>
);

export default StatsScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
