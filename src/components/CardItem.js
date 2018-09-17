import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Container = styled.View`
  padding: 50px 10px;
`;
const Text = styled.Text`
  text-align: center;
`;
const Question = styled(Text)`
  font-weight: bold;
  font-size: 48px;
`;
const Answer = styled(Text)`
  padding: 10px;
  font-size: 16px;
`;
const Button = styled.Button``;

export default class CardItem extends PureComponent {
  state = {
    showAnswer: false
  };

  static getDerivedStateFromProps(props, state) {
    return { showAnswer: false };
  }

  render() {
    const { card } = this.props;
    const { showAnswer } = this.state;
    return (
      <Container>
        <Question>{card.question}</Question>
        {showAnswer ? (
          <Answer>{card.answer}</Answer>
        ) : (
          <Button
            onPress={() => this.setState({ showAnswer: true })}
            title="Mostrar resposta"
          />
        )}
      </Container>
    );
  }
}
