import { createStackNavigator } from 'react-navigation';

import Home from './screens/Home';
import NewDeck from './screens/NewDeck';
import Deck from './screens/Deck';
import NewCard from './screens/NewCard';
import Quiz from './screens/Quiz';

const App = createStackNavigator(
  {
    Home,
    NewDeck,
    Deck,
    NewCard,
    Quiz
  },
  {
    initialRouteName: 'Home'
  }
);

export default App;
