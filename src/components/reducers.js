export const ANIMALS_LOAD = 'ANIMALS_LOAD';
export const ANIMALS_ADD = 'ANIMALS_ADD';
export const ANIMALS_LIKE = 'ANIMALS_LIKE';

export const getAnimals = state => state.animals;

export function animals(state = [], { type, payload }) {
  switch(type) {
    case ANIMALS_LOAD:
      return payload;
    case ANIMALS_ADD:
      return [...state, payload];
    default:
      return state;    

  }
}

export function likeAnimal(state = 'bambi', { type, payload }) {
  switch(type) {
    case ANIMALS_LIKE:
      return state.map(animal => animal.id === payload.id ? payload : animal);
    default:
      return state;
  }
}