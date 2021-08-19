import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import GamesScreen from '../views/games/GamesScreen';
import TeamsScreen from '../views/teams/TeamsScreen';
import NewsScreen from '../views/news/NewsScreen';
import StatsScreen from '../views/stats/StatsScreen';
import ScheduleScreen from '../views/schedule/ScheduleScreen';
import GamesIcon from '../views/games/GamesIcon';
import TeamsIcon from '../views/teams/TeamsIcon';
import NewsIcon from '../views/news/NewsIcon';
import StatsIcon from '../views/stats/StatsIcon';
import ScheduleIcon from '../views/schedule/ScheduleIcon';

const Tab = createMaterialBottomTabNavigator();
const Navigation = () => (
  <Tab.Navigator
    initialRouteName="Games"
    // @ts-ignore
    inactiveColor="#676767"
    labelStyle={{
      fontSize: 12,
    }}
    style={{
      backgroundColor: 'red',
    }}
    // screenOptions={{
    //   tabBarActiveTintColor: '#000000',
    // }}
  >
    <Tab.Screen
      name="Games"
      component={GamesScreen}
      options={{
        tabBarLabel: 'Games',
        tabBarIcon: () => <GamesIcon />,
      }}
    />
    <Tab.Screen
      name="Teams"
      component={TeamsScreen}
      options={{
        tabBarLabel: 'Teams',
        tabBarIcon: () => <TeamsIcon />,
      }}
    />
    <Tab.Screen
      name="News"
      component={NewsScreen}
      options={{
        tabBarLabel: 'News',
        tabBarIcon: () => <NewsIcon />,
      }}
    />
    <Tab.Screen
      name="Stats"
      component={StatsScreen}
      options={{
        tabBarLabel: 'Stats',
        tabBarIcon: () => <StatsIcon />,
      }}
    />
    <Tab.Screen
      name="Schedule"
      component={ScheduleScreen}
      options={{
        tabBarLabel: 'Schedule',
        tabBarIcon: () => <ScheduleIcon />,
      }}
    />
  </Tab.Navigator>
);

export default Navigation;
