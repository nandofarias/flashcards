import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { getDeck } from '../utils/api';

const Container = styled.View``;
const Text = styled.Text`
  padding: 30px;
  text-align: center;
`;
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

  formatTimeToComplete = cardsCount =>
    cardsCount === 0
      ? 'Adicione uma carta para começar o quiz.'
      : `O tempo médio deste quiz é de ${cardsCount * 5} segundos.`;
  render() {
    const { deck } = this.state;
    const { navigation } = this.props;
    const cards = deck.cards ? Object.values(deck.cards) : [];
    const cardsCount = cards.length;
    return (
      <Container>
        <Text>{this.formatTimeToComplete(cardsCount)}</Text>
        <Button
          onPress={() => navigation.push('NewCard', { deckId: deck.id })}
          title="Nova carta"
        />
        {cardsCount > 0 && (
          <Button
            onPress={() => navigation.push('Quiz', { cards })}
            title="Começar o quiz"
          />
        )}
      </Container>
    );
  }
}
