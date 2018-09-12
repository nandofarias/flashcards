import React, { PureComponent } from 'react';
import styled from 'styled-components';
import DeckItem from '../components/DeckItem';
import { getDeck } from '../utils/api';

const Container = styled.View``;
const Button = styled.Button``;

export default class Deck extends PureComponent {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('deck').title
  });

  state = {
    deck: this.props.navigation.getParam('deck')
  };

  componentDidMount() {
    this.props.navigation.addListener('didFocus', () => this.fetchDeck());
  }

  fetchDeck = async () => {
    const deck = await getDeck(this.state.deck.id);
    this.setState({ deck });
  };
  render() {
    const { deck } = this.state;
    const { navigation } = this.props;
    const cards = deck.cards ? Object.values(deck.cards) : [];
    return (
      <Container>
        <DeckItem deck={deck} />
        <Button
          onPress={() => navigation.push('NewCard', { deckId: deck.id })}
          title="Novo Card"
        />
        {cards.length > 0 && (
          <Button
            onPress={() => navigation.push('Quiz', { cards })}
            title="Começar o Quiz"
          />
        )}
      </Container>
    );
  }
}
