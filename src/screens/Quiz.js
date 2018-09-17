import React, { PureComponent } from 'react';
import { Animated } from 'react-native';
import styled from 'styled-components';
import CardItem from '../components/CardItem';
import Results from '../components/Results';
import { setLocalNotification } from '../utils/notifications';

const Container = styled.View``;
const Progress = Animated.createAnimatedComponent(styled.View`
  height: 2px;
  background-color: #1194f6;
`);
const Button = styled.Button``;
const CardContainer = styled.View``;
const ResultsContainer = styled.View``;

export default class Quiz extends PureComponent {
  static navigationOptions = {
    title: 'Quiz'
  };

  state = {
    currentCard: 0,
    evolution: new Animated.Value(0),
    correct: 0,
    isFinished: false,
    cards: this.props.navigation.getParam('cards')
  };

  componentDidMount() {
    const { evolution, cards } = this.state;
    Animated.timing(evolution, {
      toValue: 100 / cards.length,
      duration: 500
    }).start();
  }

  next = isCorrect => {
    const { currentCard, evolution, cards } = this.state;
    const newEvolution = ((currentCard + 2) * 100) / cards.length;
    const isFinished = currentCard === cards.length - 1;
    if (isFinished) setLocalNotification();
    Animated.timing(evolution, {
      toValue: newEvolution,
      duration: 500
    }).start();
    this.setState(state => ({
      currentCard: state.currentCard + 1,
      correct: isCorrect ? state.correct + 1 : state.correct,
      isFinished
    }));
  };

  reset = () => {
    const { evolution, cards } = this.state;
    Animated.timing(evolution, {
      toValue: 100 / cards.length,
      duration: 500
    }).start();
    this.setState({
      currentCard: 0,
      correct: 0,
      isFinished: false
    });
  };

  goToDeck = () => {
    this.props.navigation.goBack();
  };

  render() {
    const { currentCard, evolution, correct, isFinished, cards } = this.state;
    return (
      <Container>
        {isFinished ? (
          <ResultsContainer>
            <Results total={cards.length} correct={correct} />
            <Button title="Recomeçar quiz" onPress={this.reset} />
            <Button title="Voltar ao baralho" onPress={this.goToDeck} />
          </ResultsContainer>
        ) : (
          <CardContainer>
            <Progress
              style={{
                width: evolution.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0%', '1%']
                })
              }}
            />
            <CardItem card={cards[currentCard]} />
            <Button
              color="green"
              title="Correta"
              onPress={() => this.next(true)}
            />
            <Button
              color="red"
              title="Incorreta"
              onPress={() => this.next(false)}
            />
          </CardContainer>
        )}
      </Container>
    );
  }
}
