import { all } from 'redux-saga/effects';

// SAGAS
import postMovieSaga from './postMovie.saga';
import getMoviesSaga from './getMovies.saga';
import getSelectedSaga from './getSelected.saga';

function* rootSaga() {
  // register all sagas
  yield all([
    // listing sagas
    postMovieSaga(),
    getMoviesSaga(),
    getSelectedSaga(),
  ]);
}

export default rootSaga;
