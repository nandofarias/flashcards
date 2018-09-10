import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Container = styled.View``;
const Text = styled.Text``;

export default class NewCard extends PureComponent {
  static navigationOptions = {
    title: 'Novo Card'
  };
  render() {
    return (
      <Container>
        <Text>New Card</Text>
      </Container>
    );
  }
}
