import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { StyleSheet, Image, Text, View, ScrollView } from 'react-native';
import { Card, DataTable, Title } from 'react-native-paper';

const StatsScreen = () => {
  const QUERY = gql`
    query {
      region {
        id
        name
        teams {
          image_url
          point
          lose
          score
          streak
          win
        }
      }
    }
  `;
  const { data } = useQuery(QUERY);
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>NBA 2020-21 Regular Season Standings</Text>
        <Card style={styles.card}>
          {data?.region?.map((item) => (
            <View key={item.id}>
              <Card.Content>
                <Title style={styles.titleCard}>{item.name}</Title>
              </Card.Content>
              <DataTable.Header>
                <DataTable.Title>Team</DataTable.Title>
                <DataTable.Title numeric>Wins</DataTable.Title>
                <DataTable.Title numeric>Lose</DataTable.Title>
                <DataTable.Title numeric>Score</DataTable.Title>
                <DataTable.Title numeric>Point</DataTable.Title>
                <DataTable.Title numeric>Streak</DataTable.Title>
              </DataTable.Header>
              {item?.teams?.map((e) => (
                <DataTable.Row style={styles.rowDataTable}>
                  <DataTable.Cell>
                    <Image
                      source={{
                        uri: e.image_url,
                      }}
                      style={styles.image}
                    />
                  </DataTable.Cell>
                  <DataTable.Cell numeric>{e.win}</DataTable.Cell>
                  <DataTable.Cell numeric>{e.lose}</DataTable.Cell>
                  <DataTable.Cell numeric>{e.point}</DataTable.Cell>
                  <DataTable.Cell numeric>{e.score}</DataTable.Cell>
                  <DataTable.Cell numeric>{e.streak}</DataTable.Cell>
                </DataTable.Row>
              ))}
            </View>
          ))}
        </Card>
      </ScrollView>
    </View>
  );
};

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
    marginTop: '15%',
    textAlign: 'center',
  },
  card: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: '15%',
  },
  titleCard: {
    fontSize: 16,
    marginTop: '5%',
  },
  rowDataTable: {
    marginTop: 10,
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 50,
  },
});
