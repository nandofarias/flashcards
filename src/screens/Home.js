import React, { PureComponent } from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import ListDecks from '../components/ListDecks';
import DeckItem from '../components/DeckItem';

const Container = styled.View``;
const Button = styled.Button``;

const decks = [
  {
    id: 1,
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  {
    id: 2,
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer:
          'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
];

export default class Home extends PureComponent {
  static navigationOptions = ({ navigation }) => ({
    title: 'Home',
    headerRight: (
      <Button onPress={() => navigation.push('NewDeck')} title="Novo" />
    )
  });
  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <ListDecks>
          {decks &&
            decks.map(deck => (
              <TouchableOpacity
                key={deck.id}
                onPress={() => navigation.push('Deck', { title: deck.title })}
              >
                <DeckItem deck={deck} />
              </TouchableOpacity>
            ))}
        </ListDecks>
      </Container>
    );
  }
}
