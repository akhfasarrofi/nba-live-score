import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GamesScreen from '../../games/GamesScreen';
import TeamsScreen from '../../teams/TeamsScreen';
import NewsScreen from '../../news/NewsScreen';
import StatsScreen from '../../stats/StatsScreen';
import ScheduleScreen from '../../schedule/ScheduleScreen';
import GamesIcon from '../../games/GamesIcon';
import TeamsIcon from '../../teams/TeamsIcon';
import NewsIcon from '../../news/NewsIcon';
import StatsIcon from '../../stats/StatsIcon';
import ScheduleIcon from '../../schedule/ScheduleIcon';

const Tab = createMaterialBottomTabNavigator();
const Navigation = () => (
  <Tab.Navigator
    initialRouteName="Games"
    // @ts-ignore
    inactiveColor="#676767"
    labelStyle={{ fontSize: 12 }}
    style={{ backgroundColor: 'red' }}
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
