import React from 'react';
import Root from './src/router';
import { setLocalNotification } from './src/utils/notifications';

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification();
  }
  render() {
    return <Root />;
  }
}
