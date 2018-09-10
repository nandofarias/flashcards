import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Container = styled.ScrollView``;

export default class ListDecks extends PureComponent {
  render() {
    return <Container>{this.props.children}</Container>;
  }
}
