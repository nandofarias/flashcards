import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Container = styled.View`
  height: 300;
`;

const Text = styled.Text``;

export default class DeckItem extends PureComponent {
  render() {
    const { deck } = this.props;
    return (
      <Container>
        <Text>{deck.title}</Text>
      </Container>
    );
  }
}
