import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Container = styled.View``;
const Text = styled.Text``;
const Button = styled.Button``;

export default class Deck extends PureComponent {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title')
  });
  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Text>Deck</Text>
        <Button onPress={() => navigation.push('NewCard')} title="Novo Card" />
        <Button
          onPress={() => navigation.push('Quiz')}
          title="Começar o Quiz"
        />
      </Container>
    );
  }
}
