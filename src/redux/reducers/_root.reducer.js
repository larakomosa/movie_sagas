import { combineReducers } from 'redux';

// REDUCERS
import movies from './movies.reducer';
import selectedPoster from './selectedPoster.reducer';
import selected from './selected.reducer';
import errorMessage from './errorMessage.reducer';

const reducers = combineReducers({
  movies,
  selectedPoster,
  selected,
  errorMessage,
});

export default reducers;
