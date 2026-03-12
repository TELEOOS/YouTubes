import React from 'react';
import {
  IconHome,
  IconPlayerPlay,
  IconUsers,
  IconUser,
} from '@tabler/icons-react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabParamList } from './types';
import HomeScreen from '../../features/home/screens/HomeScreen';
import ShortsScreen from '../../features/shorts/screens/ShortsScreen';
import SubscriptionsScreen from '../../features/subscriptions/screens/SubscriptionsScreen';
import ProfileScreen from '../../features/profiles/screens/ProfileScreen';
const Tab = createBottomTabNavigator<TabParamList>();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#FF0000',
        tabBarInactiveTintColor: '#999',
        tabBarIcon: ({ color, size }) => {
          switch (route.name) {
            case 'Home':
              return <IconHome color={color} size={size} />;
            case 'Shorts':
              return <IconPlayerPlay color={color} size={size} />;
            case 'Subscriptions':
              return <IconUsers color={color} size={size} />;
            case 'Profile':
              return <IconUser color={color} size={size} />;
          }
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Shorts" component={ShortsScreen} />
      <Tab.Screen name="Subscriptions" component={SubscriptionsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
