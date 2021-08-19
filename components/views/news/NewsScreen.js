import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Card, Paragraph, Title } from 'react-native-paper';
import { newsthumnail } from '../../../data';

const GamesScreen = () => (
  <View style={styles.container}>
    <ScrollView>
      <Text style={styles.title}>News</Text>
      <Card style={styles.card}>
        <Card.Cover style={styles.cardImage} source={newsthumnail.image} />
        <Card.Content>
          <Title style={styles.cardTitle}>{newsthumnail.title}</Title>
          <Paragraph style={styles.cardParagraph}>
            {newsthumnail.content}
          </Paragraph>
        </Card.Content>
      </Card>

      <Card style={styles.listCard}>
        {/* <View> */}
        <Card.Cover source={newsthumnail.image} />
        <Card.Content>
          <Title>{newsthumnail.title}</Title>
          <Paragraph>{newsthumnail.content}</Paragraph>
        </Card.Content>
        {/* </View> */}
      </Card>
    </ScrollView>
  </View>
);

export default GamesScreen;

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
    marginLeft: 20,
  },
  card: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 10,
  },
  cardImage: {
    height: 160,
    resizeMode: 'contain',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
  },
  cardParagraph: {
    fontSize: 11,
  },
  listCard: {
    // display: 'flex',
    flexDirection: 'row',
  },
});
