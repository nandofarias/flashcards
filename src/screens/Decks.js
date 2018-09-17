import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Entypo } from '@expo/vector-icons';
import DeckItem from '../components/DeckItem';
import { getDecks } from '../utils/api';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: white;
`;
const List = styled.FlatList``;
const ListItem = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  padding: 20px 10px;
`;
const Separator = styled.View`
  height: 0.7px;
  background-color: lightgray;
  margin-left: 10px;
`;
const ListIcon = styled(Entypo)`
  margin-top: 10px;
`;

const Placeholder = styled.Text`
  margin-top: 15px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;
const Button = styled.Button``;

export default class Decks extends PureComponent {
  static navigationOptions = {
    title: 'Baralhos'
  };

  state = {
    decks: null
  };

  componentDidMount() {
    this.props.navigation.addListener('didFocus', () => this.fetchDecks());
  }

  fetchDecks = async () => {
    const decks = await getDecks();
    this.setState({ decks });
  };
  render() {
    const { navigation } = this.props;
    const { decks } = this.state;
    return (
      <Container>
        <List
          data={decks}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={({ highlighted }) => (
            <Separator style={highlighted} />
          )}
          ListEmptyComponent={() => (
            <Placeholder>
              Nenhum baralho encontrado.
              <Button
                title="Adicionar novo baralho"
                onPress={() => navigation.navigate('NewDeck')}
              />
            </Placeholder>
          )}
          renderItem={({ item }) => (
            <ListItem onPress={() => navigation.push('Deck', { deck: item })}>
              <DeckItem deck={item} />
              <ListIcon name="chevron-thin-right" size={16} color="gray" />
            </ListItem>
          )}
        />
      </Container>
    );
  }
}
