import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;
export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <Container>
          <Text>Open up App.js to start working on your app!</Text>
        </Container>
      </Provider>
    );
  }
}
