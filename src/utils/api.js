import uuid from 'uuid/v4';
import { AsyncStorage } from 'react-native';

const DECKS_STORAGE_KEY = 'flashcards:decks';

export function getDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY);
}

export async function getDeck(id) {
  const decks = await AsyncStorage.getItem(DECKS_STORAGE_KEY);
  return decks.find(deck => deck.id === id);
}

export function saveDeckTitle(title) {}

export function addCardToDeck(title, card) {}
