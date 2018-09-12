import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Container = styled.View`
  height: 300;
`;

const Text = styled.Text``;

export default class DeckItem extends PureComponent {
  render() {
    const { deck } = this.props;
    const cards = deck.cards ? Object.values(deck.cards) : [];
    return (
      <Container>
        <Text>{deck.title}</Text>
        <Text>{cards.length} Cartas</Text>
      </Container>
    );
  }
}
