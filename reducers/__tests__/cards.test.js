import reducer from '../cards';
describe('/reducers/cards', () => {
  it('should return default state', () => {
    expect(reducer(undefined, { type: 'UNDEFINED' })).toEqual([]);
  });

  it('should add a card', () => {
    const action = { type: 'ADD_CARD', card: { id: 1, name: 'test', deck: 1 } };
    expect(reducer([], action)).toEqual([action.card]);
  });

  it('should get cards', () => {
    const cards = [{ id: 1, name: 'test', deck: 1 }, { id: 2, name: 'test 2', deck: 1 }];
    const action = { type: 'GET_CARDS', cards };
    expect(reducer([], action)).toEqual(cards);
  });
});
