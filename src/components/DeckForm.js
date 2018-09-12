import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { saveDeck } from '../utils/api';

const Button = styled.Button``;
const TextInput = styled.TextInput``;
const Container = styled.View``;

export default class DeckForm extends PureComponent {
  state = {
    title: ''
  };

  saveDeck = async () => {
    const deck = await saveDeck(this.state.title);
    this.setState({ title: '' });
    this.props.onFinished(deck);
  };

  render() {
    const { title } = this.state;
    return (
      <Container>
        <TextInput
          placeholder="Titulo do Baralho"
          value={this.state.title}
          onChangeText={title => this.setState({ title })}
          returnKeyType="done"
        />
        <Button
          title="Salvar"
          onPress={this.saveDeck}
          disabled={title === ''}
        />
      </Container>
    );
  }
}
