import React from 'react';
import { ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight } from 'react-native';
import { Video } from 'expo-av';
import { Card } from 'react-native-elements/dist/card/Card';
import { match, matchVideo } from '../../../data';

const GamesScreen = () => (
  <View style={styles.container}>
    <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Match</Text>
      <Video
        style={styles.video}
        source={{
          uri: matchVideo.urlVideo,
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
      />
      <Text style={styles.time}>{matchVideo.time}</Text>
      {match.map((item) => (
        <Card containerStyle={styles.card} key={item.id}>
          <Text
            style={
              item.finish === false
                ? styles.matchInfoNoFinish
                : styles.matchInfoFinish
            }
          >
            {item.drawing}
          </Text>
          <View style={styles.team}>
            <View>
              <Image source={item.logoleft} />
              <Text style={styles.teamName}>{item.nameleft}</Text>
            </View>

            <View style={styles.boxScores}>
              <Text style={styles.score}>
                {item.scoreleft === '' ? '-' : item.scoreleft}
              </Text>
            </View>

            <View>
              <Text
                style={
                  item.finish === false
                    ? styles.matchInfoNoFinish
                    : styles.matchInfoFinish
                }
              >
                {item.time}
              </Text>
            </View>

            <View style={styles.boxScores}>
              <Text style={styles.score}>
                {item.scoreright === '' ? '-' : item.scoreright}
              </Text>
            </View>

            <View>
              <Image source={item.logoright} />
              <Text style={styles.teamName}>{item.nameright}</Text>
            </View>
          </View>
          <TouchableHighlight
            style={
              item.finish === true
                ? styles.broadcastFinish
                : styles.broadcastNoFinish
            }
          >
            <Text style={styles.labelBtn}>
              {item.finish === true ? 'HIGHLIGHTS' : 'LIVE BROADCAST'}
            </Text>
          </TouchableHighlight>
        </Card>
      ))}
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
    marginTop: '15%',
    marginLeft: '5%',
  },
  video: {
    width: '92%',
    height: '25%',
    borderRadius: 10,
    margin: '4%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  time: {
    color: 'white',
    marginLeft: '5%',
    fontWeight: '500',
  },
  card: {
    elevation: 0,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  matchInfoNoFinish: {
    color: '#FF54F8',
    fontWeight: '600',
    textAlign: 'center',
  },
  matchInfoFinish: {
    color: 'black',
    fontWeight: '600',
    textAlign: 'center',
  },
  team: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  teamName: {
    marginTop: '15%',
    fontWeight: '600',
  },
  boxScores: {
    justifyContent: 'center',
  },
  score: {
    fontWeight: '600',
    fontSize: 30,
    fontStyle: 'italic',
  },
  broadcastFinish: {
    justifyContent: 'center',
    backgroundColor: '#CECECE',
    borderRadius: 50,
    padding: 2,
    width: '50%',
    alignSelf: 'center',
  },
  broadcastNoFinish: {
    justifyContent: 'center',
    backgroundColor: '#FF54F8',
    borderRadius: 50,
    padding: 2,
    width: '50%',
    alignSelf: 'center',
  },
  labelBtn: {
    color: 'white',
    textAlign: 'center',
  },
});
