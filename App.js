import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;
export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </Container>
    );
  }
}
