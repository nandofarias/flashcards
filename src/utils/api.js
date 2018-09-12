import uuid from 'uuid/v4';
import { AsyncStorage } from 'react-native';

const DECKS_STORAGE_KEY = 'flashcards:decks';

export async function getDecks() {
  const object = await AsyncStorage.getItem(DECKS_STORAGE_KEY);
  const decks = object ? Object.values(JSON.parse(object)) : [];
  return decks;
}

export async function getDeck(id) {
  const object = await AsyncStorage.getItem(DECKS_STORAGE_KEY);
  const decks = JSON.parse(object);
  return decks[id];
}

export async function saveDeck(title) {
  const id = uuid();
  const deck = { id, title };
  await AsyncStorage.mergeItem(
    DECKS_STORAGE_KEY,
    JSON.stringify({
      [id]: deck
    })
  );
  return deck;
}

export async function saveCard(idDeck, card) {
  const idCard = uuid();
  await AsyncStorage.mergeItem(
    DECKS_STORAGE_KEY,
    JSON.stringify({
      [idDeck]: { cards: { [idCard]: card } }
    })
  );
  return card;
}
