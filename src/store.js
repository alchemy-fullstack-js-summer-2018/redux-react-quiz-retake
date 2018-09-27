import { createStore, combineReducers } from 'redux';
import { animals, likeAnimal } from './components/reducers';

const rootReducer = combineReducers({
  animals,
  likeAnimal
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;