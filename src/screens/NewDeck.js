import React, { PureComponent } from 'react';
import styled from 'styled-components';
import DeckForm from '../components/DeckForm';

const Container = styled.SafeAreaView``;

export default class NewDeck extends PureComponent {
  static navigationOptions = {
    title: 'Novo Baralho'
  };
  onFinished = deck => this.props.navigation.navigate('Deck', { deck });
  render() {
    return (
      <Container>
        <DeckForm onFinished={this.onFinished} />
      </Container>
    );
  }
}
