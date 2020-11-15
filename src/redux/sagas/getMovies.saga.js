import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getMovies(action) {
  try {
    yield put({ type: 'ERROR_RESET' });
    const response = yield axios.get('/api/movie');
    console.log(response.data);
    // version of a dispatch = put
    yield put({
      type: 'SET_MOVIES',
      payload: response.data,
    });
  } catch (err) {
    console.log('GET all movies error', err);
    yield put({
      type: 'ERROR_MSG', //***Need to do error message reducer***
      payload: 'There was a problem the details! Please try again.',
    });
  }
}

function* getMoviesSaga() {
  yield takeLatest('GET_MOVIES', getMovies);
}

export default getMoviesSaga;
