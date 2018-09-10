import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Container = styled.View``;
const Text = styled.Text``;

export default class Quiz extends PureComponent {
  static navigationOptions = {
    title: 'Quiz'
  };
  render() {
    return (
      <Container>
        <Text>Quiz</Text>
      </Container>
    );
  }
}
