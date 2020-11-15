import { combineReducers } from 'redux';

// REDUCERS
import movies from './movies.reducer';
import selectedPoster from './selectedPoster.reducer';
import selected from './selected.reducer';

const reducers = combineReducers({
  movies,
  selectedPoster,
  selected,
});

export default reducers;
