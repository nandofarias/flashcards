import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Container = styled.View``;
const Text = styled.Text``;

export default class CardItem extends PureComponent {
  render() {
    return (
      <Container>
        <Text>CardItem</Text>
      </Container>
    );
  }
}
