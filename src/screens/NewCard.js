import React, { PureComponent } from 'react';
import styled from 'styled-components';
import CardForm from '../components/CardForm';

const Container = styled.SafeAreaView``;

export default class NewCard extends PureComponent {
  static navigationOptions = {
    title: 'Nova Carta'
  };
  render() {
    const { navigation } = this.props;
    const deckId = navigation.getParam('deckId');
    return (
      <Container>
        <CardForm deckId={deckId} onFinished={() => navigation.goBack()} />
      </Container>
    );
  }
}
