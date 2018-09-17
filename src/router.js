import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import Decks from './screens/Decks';
import NewDeck from './screens/NewDeck';
import Deck from './screens/Deck';
import NewCard from './screens/NewCard';
import Quiz from './screens/Quiz';

const HomeNavigator = createStackNavigator(
  {
    Decks,
    Deck,
    NewCard,
    Quiz
  },
  {
    initialRouteName: 'Decks'
  }
);

const AppNavigator = createBottomTabNavigator(
  {
    Baralhos: HomeNavigator,
    'Novo Baralho': createStackNavigator({ NewDeck })
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Baralhos') {
          iconName = `cards${focused ? '' : '-outline'}`;
        } else if (routeName === 'Novo Baralho') {
          iconName = `plus-box${focused ? '' : '-outline'}`;
        }

        return (
          <MaterialCommunityIcons name={iconName} size={25} color={tintColor} />
        );
      }
    })
  }
);

export default AppNavigator;
