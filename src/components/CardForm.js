import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { saveCard } from '../utils/api';

const Button = styled.Button``;
const TextInput = styled.TextInput``;
const Container = styled.View``;

export default class CardForm extends PureComponent {
  state = {
    question: '',
    answer: ''
  };

  saveCard = async () => {
    await saveCard(this.props.deckId, this.state);
    this.props.onFinished();
  };

  render() {
    const { question, answer } = this.state;
    return (
      <Container>
        <TextInput
          placeholder="Insira a pergunta aqui"
          onChangeText={question => this.setState({ question })}
          returnKeyType="next"
          onSubmitEditing={() => this.answerInput.focus()}
          blurOnSubmit={false}
        />
        <TextInput
          placeholder="Insira a resposta aqui"
          onChangeText={answer => this.setState({ answer })}
          returnKeyType="done"
          innerRef={input => (this.answerInput = input)}
        />
        <Button
          title="Salvar"
          onPress={this.saveCard}
          disabled={question === '' || answer === ''}
        />
      </Container>
    );
  }
}
