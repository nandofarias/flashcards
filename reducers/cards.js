import { ADD_CARD, GET_CARDS } from '../actions/cards';
export default (state = [], action) => {
  switch (action.type) {
    case ADD_CARD:
      return [...state, action.card];
    case GET_CARDS:
      return [...action.cards];
    default:
      return state;
  }
};
