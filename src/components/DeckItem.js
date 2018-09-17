import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Container = styled.View``;

const Title = styled.Text`
  font-weight: bold;
  margin-bottom: 5px;
`;
const Text = styled.Text`
  color: gray;
`;

export default class DeckItem extends PureComponent {
  formatCardText = cardsCount =>
    cardsCount === 0
      ? 'Sem cartas'
      : cardsCount > 1
        ? `${cardsCount} Cartas`
        : '1 Carta';
  render() {
    const { deck } = this.props;
    const cards = deck.cards ? Object.values(deck.cards) : [];
    const cardsCount = cards.length;
    return (
      <Container>
        <Title>{deck.title}</Title>
        <Text>{this.formatCardText(cardsCount)}</Text>
      </Container>
    );
  }
}
