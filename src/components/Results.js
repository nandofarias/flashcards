import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Container = styled.View`
  padding: 50px 10px;
`;
const Text = styled.Text`
  text-align: center;
`;
const Result = styled(Text)`
  font-weight: bold;
  font-size: 48px;
`;

export default class Results extends PureComponent {
  formatResultMessage = () => {
    const { total, correct } = this.props;
    const result = (correct * 100) / total;
    return result > 60
      ? 'Parabéns, continue com o bom rendimento.'
      : 'Melhor sorte na próxima vez, continue tentando.';
  };
  render() {
    const { total, correct } = this.props;
    return (
      <Container>
        <Text>Seu resultado foi de:</Text>
        <Result>
          {correct} / {total}
        </Result>
        <Text>{this.formatResultMessage()}</Text>
      </Container>
    );
  }
}
