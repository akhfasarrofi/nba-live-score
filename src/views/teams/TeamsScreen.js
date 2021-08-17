import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Card } from 'react-native-elements/dist/card/Card';
import { allteams } from '../../data';

const TeamsScreen = () => (
  <View style={styles.container}>
    <ScrollView>
      <Text style={styles.title}>All Teams</Text>
      {allteams.map((item) => (
        <View key={item.id}>
          <Text style={styles.region}>{item.region}</Text>
          <Card containerStyle={styles.card}>
            <View style={styles.item}>
              {item.logo.map((logo) => (
                <View>
                  <Image source={logo} />
                </View>
              ))}
            </View>
          </Card>
        </View>
      ))}
    </ScrollView>
  </View>
);

export default TeamsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: '#13172C',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
    marginTop: 40,
    marginLeft: 20,
  },
  region: {
    color: 'white',
    marginLeft: 20,
    fontWeight: '500',
    marginTop: 20,
    fontSize: 16,
  },
  card: {
    elevation: 0,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  item: {
    flexDirection: 'row', justifyContent: 'space-around',
  },
});
