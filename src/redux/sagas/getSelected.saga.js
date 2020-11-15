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
        category: movie.name, //<----transforms ID to item. (process mapped in line comments and then removed for brevity. See commit 4abd41d70b75e839764595fb8c706d2b85b248cd)
      };
    });
    yield put({
      type: 'SET_SELECTED',
      payload: { ...response.data[0], genreArray }, // <----Send 1st movie array only (index of zero) + genreArray
    });
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
