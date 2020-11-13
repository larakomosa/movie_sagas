import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import { Provider } from 'react-redux';
import logger from 'redux-logger';

import createSagaMiddleware from 'redux-saga';
import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
  yield takeLatest('GET_MOVIES', getMovies);
  yield takeLatest('GET_SELECTED', getSelected);
  yield takeLatest('POST_MOVIE', postMovie);
}

//app.use('/api/movie', movieRouter);   --axios URL
//app.use('/api/genre', genreRouter);   --axios URL

// Used to store movies returned from the server
const movies = (state = [], action) => {
  switch (action.type) {
    case 'SET_MOVIES':
      return action.payload;
    default:
      return state;
  }
};

const selected = (state = [], action) => {
  switch (action.type) {
    case 'SET_SELECTED':
      return action.payload;
    default:
      return state;
  }
};

// Used to store the movie genres
const genres = (state = [], action) => {
  switch (action.type) {
    case 'SET_GENRES':
      return action.payload;
    default:
      return state;
  }
};

// Thanks Joey Heitz for this idea!
const selectedPoster = (state = [], action) => {
  console.log('action', action);
  switch (action.type) {
    case 'ID_CALL':
      return action.payload;
    default:
      return state;
  }
};

function* postMovie(action) {
  console.log('tweet tweet');
  try {
    yield put({ type: 'ERROR_RESET' });
    yield axios.post('/api/movie', action.payload);
    yield put({
      type: 'SET_MOVIES',
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: 'ERROR_MSG',
      payload: "Sorry we couldn't save your book. Please try again.",
    });
  }
}

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
    console.log(err);
    yield put({
      type: 'ERROR_MSG',
      payload: 'There was a problem loading movies. Please try again.',
    });
  }
}

function* getSelected(action) {
  console.log('moo moo', action.payload);
  try {
    yield put({ type: 'ERROR_RESET' });
    const response = yield axios.get(`/api/movie/${action.payload}`);
    console.log(response.data);
    // version of a dispatch = put
    yield put({
      type: 'SET_SELECTED',
      payload: response.data,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: 'ERROR_MSG',
      payload: 'There was a problem loading movies. Please try again.',
    });
  }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Create one store that all components can use
const storeInstance = createStore(
  combineReducers({
    movies,
    genres,
    selectedPoster,
    selected,
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger)
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
