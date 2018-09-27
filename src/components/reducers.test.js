import { 
  animals, 
  ANIMALS_LOAD, 
  ANIMALS_ADD,
  ANIMALS_LIKE
  
} from './reducers';

describe('animals reducers', () => {

  it('initialize to empty array', () => {
    const state = animals(undefined, {});
    expect(state).toEqual([]);
  });

  it('loads animals', () => {
    const payload = [{}, {}, {}];

    const state = animals([], { 
      type: ANIMALS_LOAD,
      payload
    });

    expect(state).toBe(payload);
  });

  it('adds animal', () => {
    const animal1 = { id: 1, name: 'Felix', type: 'cat', likes: 0 };
    const animal2 = { id: 2, name: 'Bambi', type: 'deer', likes: 0 };
    const animal3 = { id: 3, name: 'Garfield', type: 'cat', likes: 0 };

    const state = animals([animal1, animal2], { 
      type: ANIMALS_ADD,
      payload: animal3
    });

    expect(state).toEqual([animal1, animal2, animal3]);
  });

  it('likes an animal', () => {
    const animal1 = { id: 1, name: 'Felix', type: 'cat', likes: 0 };
    const animal2 = { id: 2, name: 'Bambi', type: 'deer', likes: 0 };
    const animal3 = { id: 3, name: 'Garfield', type: 'cat', likes: 0 };

    const liked = { id: 2, name: 'Bambi', type: 'deer', likes: 1 };

    const state = animals([animal1, animal2, animal3], { 
      type: ANIMALS_LIKE,
      payload: liked
    });

    expect(state).toEqual([
      animal1, 
      liked, 
      animal3
    ]);
  });

  
});
