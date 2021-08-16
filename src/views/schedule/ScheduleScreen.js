import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ScheduleScreen = () => (
  <View style={styles.container}>
    <Text>Schedule!</Text>
  </View>
);

export default ScheduleScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
