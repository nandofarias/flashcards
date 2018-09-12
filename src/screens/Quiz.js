import React, { PureComponent } from 'react';
import styled from 'styled-components';
import CardItem from '../components/CardItem';

const Container = styled.View``;
const Text = styled.Text``;

export default class Quiz extends PureComponent {
  static navigationOptions = {
    title: 'Quiz'
  };

  state = {
    cards: this.props.navigation.getParam('cards'),
    currentCard: 0
  };
  render() {
    const { currentCard, cards } = this.state;
    return (
      <Container>
        <Text>
          {currentCard + 1} / {cards.length}
        </Text>
      </Container>
    );
  }
}
