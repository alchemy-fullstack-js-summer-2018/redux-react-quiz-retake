export const ANIMALS_LOAD = 'ANIMALS_LOAD';
export const ANIMALS_ADD = 'ANIMALS_ADD';
export const ANIMALS_LIKE = 'ANIMALS_LIKE';
export const TOP_ANIMAL = 'TOP_ANIMAL';

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

// Don't know how to write function to get top Animal using sort method
// export function topAnimal(state = animals, { type, payload }){
//   switch(type) {
//     case TOP_ANIMAL:
//       return state.sort((animal1.likes, animal2.likes) ({ 
//          animal1.likes.localeCompare(animal2.likes) })

//       }
//   }
// }

