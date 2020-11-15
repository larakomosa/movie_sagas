import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// GET a single movie
function* getSelected(action) {
  console.log('moo, moo SHOW ID', action);
  try {
    const response = yield axios.get(`/api/movie/${action.payload}`);
    const genreArray = response.data.map((movie) => {
      return {
        genre_id: movie.genre_id, //
        category: movie.name, //<----transforms ID to item
      };
    });
    yield put({
      type: 'SET_SELECTED',
      payload: { ...response.data[0], genreArray }, // <----Send 1st movie array only (index of zero) + genreArray
    }); // <--- Thanks to my friend Joe Kuckleman with Programmatis for showing me this payload trick.
  } catch (err) {
    console.log(err);
    yield put({
      type: 'ERROR_MSG',
      payload: 'There was a problem loading movies. Please try again.',
    });
  }
}

function* getSelectedSaga() {
  yield takeLatest('GET_SELECTED', getSelected);
}

export default getSelectedSaga;
