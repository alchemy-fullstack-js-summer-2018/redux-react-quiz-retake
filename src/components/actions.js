import { ANIMALS_LOAD } from './reducers';
import shortid from 'shortid';

export const loadAnimals = () => ({ 
  type: ANIMALS_LOAD, 
  payload: [
    { id: shortid.generate(), name: 'George', type: 'monkey', likes: 2 },
    { id: shortid.generate(), name: 'Lassie', type: 'dog', likes: 1 },
    { id: shortid.generate(), name: 'Felix', type: 'cat', likes: 2 },
  ] 
});

// , ANIMALS_ADD, ANIMALS_LIKE 