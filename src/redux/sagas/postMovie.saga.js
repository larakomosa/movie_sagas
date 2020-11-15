import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// Add Movie to Home Page
function* postMovie(action) {
  console.log('tweet tweet, post', action);
  try {
    yield put({ type: 'ERROR_RESET' });
    yield axios.post('/api/movie', action.payload);
    yield put({
      type: 'SET_MOVIES',
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: 'ERROR_MSG', //***Need to do error message reducer***
      payload: "Sorry we couldn't save your movie. Please try again.",
    });
  }
}

function* postMovieSaga() {
  yield takeLatest('POST_MOVIE', postMovie);
}

export default postMovieSaga;
