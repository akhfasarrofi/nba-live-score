import React from 'react';
import { StyleSheet, Image, Text, View, ScrollView } from 'react-native';
import { Card, DataTable, Title } from 'react-native-paper';
import { stats } from '../../../data';

const StatsScreen = () => (
  <View style={styles.container}>
    <ScrollView>

      <Text style={styles.title}>NBA 2020-21 Regular Season Standings</Text>
      <Card style={styles.card}>
        {stats.map((item) => (
          <View key={item.id}>
            <Card.Content>
              <Title style={styles.titleCard}>{item.region}</Title>
            </Card.Content>
            <DataTable.Header>
              <DataTable.Title>Team</DataTable.Title>
              <DataTable.Title numeric>Wins</DataTable.Title>
              <DataTable.Title numeric>Home</DataTable.Title>
              <DataTable.Title numeric>Road</DataTable.Title>
              <DataTable.Title numeric>Streak</DataTable.Title>
            </DataTable.Header>
            {item.team.map((data) => (
              <DataTable.Row
                style={styles.rowDataTable}
              >
                <DataTable.Cell>
                  <Image source={data.logo} />
                </DataTable.Cell>
                <DataTable.Cell numeric>{data.wins}</DataTable.Cell>
                <DataTable.Cell numeric>{data.home}</DataTable.Cell>
                <DataTable.Cell numeric>{data.road}</DataTable.Cell>
                <DataTable.Cell numeric>
                  {data.streak}
                </DataTable.Cell>
              </DataTable.Row>
            ))}
          </View>
        ))}
      </Card>
    </ScrollView>
  </View>
);

export default StatsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#13172C',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
    marginTop: 40,
    textAlign: 'center',
  },
  card: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: 40,
  },
  titleCard: {
    fontSize: 16,
    marginTop: 10,
  },
  rowDataTable: {
    marginTop: 10,
  },
});
