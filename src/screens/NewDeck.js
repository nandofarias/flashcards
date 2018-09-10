import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Container = styled.View``;
const Text = styled.Text``;

export default class NewDeck extends PureComponent {
  static navigationOptions = {
    title: 'Novo Deck'
  };
  render() {
    return (
      <Container>
        <Text>New Deck</Text>
      </Container>
    );
  }
}
