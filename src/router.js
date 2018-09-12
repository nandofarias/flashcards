import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';

import Home from './screens/Home';
import NewDeck from './screens/NewDeck';
import Deck from './screens/Deck';
import NewCard from './screens/NewCard';
import Quiz from './screens/Quiz';

const HomeNavigator = createStackNavigator(
  {
    Home,
    Deck,
    NewCard,
    Quiz
  },
  {
    initialRouteName: 'Home'
  }
);

const AppNavigator = createBottomTabNavigator({
  Home: HomeNavigator,
  NewDeck
});

export default AppNavigator;
