import { initStateStore } from '../__mocks__/init-state-store';
import { store } from 'app/store/store';

describe('init state', () => {
  it('init state', () => {
    const result = store.getState();
    expect(result).toEqual(initStateStore);
  });
});
