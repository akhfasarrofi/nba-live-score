import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Card } from 'react-native-elements/dist/card/Card';
import { useQuery, gql } from '@apollo/client';

const TeamsScreen = () => {
  const QUERY = gql`
    query {
      region {
        id
        name
        teams {
          id
          image_url
        }
      }
    }
  `;

  const { data } = useQuery(QUERY);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>All Teams</Text>
        {data?.region?.map((item) => (
          <View key={item.id}>
            <Text style={styles.region}>{item.name}</Text>
            <Card containerStyle={styles.card}>
              <View style={styles.item}>
                {item?.teams?.map((e) => (
                  <View key={e.id}>
                    <Image
                      source={{
                        uri: e.image_url,
                      }}
                      style={styles.image}
                    />
                  </View>
                ))}
              </View>
            </Card>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default TeamsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#13172C',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
    marginTop: '5%',
    marginLeft: '5%',
  },
  region: {
    color: 'white',
    marginLeft: 20,
    fontWeight: '500',
    marginTop: '5%',
    fontSize: 16,
  },
  card: {
    elevation: 0,
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 10,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 50,
  },
});
