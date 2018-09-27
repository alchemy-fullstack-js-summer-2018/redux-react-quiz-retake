import { ANIMALS_LOAD, ANIMALS_ADD, ANIMALS_LIKE } from './reducers';
import shortid from 'shortid';

export const loadAnimals = () => ({ 
  type: ANIMALS_LOAD, 
  payload: [
    { id: shortid.generate(), name: 'George', type: 'monkey', likes: 2 },
    { id: shortid.generate(), name: 'Lassie', type: 'dog', likes: 1 },
    { id: shortid.generate(), name: 'Felix', type: 'cat', likes: 2 },
  ] 
});

export const addAnimal = () => ({
  type: ANIMALS_ADD,
  payload: [
    { id: shortid.generate(), name: 'Bambi', type: 'deer', likes: 0 }
  ]
});

export const likeAnimal = () => ({
  type: ANIMALS_LIKE,
  payload: [
    { id: shortid.generate(), name: 'Bambi', type: 'deer', likes: 1 }
  ]
});
