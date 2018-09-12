import React, { PureComponent } from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import ListDecks from '../components/ListDecks';
import DeckItem from '../components/DeckItem';
import { getDecks } from '../utils/api';

const Container = styled.View``;

export default class Home extends PureComponent {
  static navigationOptions = {
    title: 'Home'
  };

  state = {
    decks: null
  };

  componentDidMount() {
    this.props.navigation.addListener('didFocus', () => this.fetchDecks());
  }

  fetchDecks = async () => {
    const decks = await getDecks();
    this.setState({ decks });
  };
  render() {
    const { navigation } = this.props;
    const { decks } = this.state;
    return (
      <Container>
        <ListDecks>
          {decks &&
            decks.map(deck => (
              <TouchableOpacity
                key={deck.id}
                onPress={() => navigation.push('Deck', { deck })}
              >
                <DeckItem deck={deck} />
              </TouchableOpacity>
            ))}
        </ListDecks>
      </Container>
    );
  }
}
