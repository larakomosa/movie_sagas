import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import rootReducer from './redux/reducers/_root.reducer';

// SAGA
import createSagaMiddleware from 'redux-saga';
import rootSaga from './redux/sagas/_root.saga';

// // Create the rootSaga generator function
// function* rootSaga() {
//   // yield takeLatest('GET_MOVIES', getMovies);
//   // yield takeLatest('GET_SELECTED', getSelected);
//   yield takeLatest('POST_MOVIE', postMovie);
//   //***Need to do error message reducer***
// }

// // Used to store movie details
// const movies = (state = [], action) => {
//   switch (action.type) {
//     case 'SET_MOVIES':
//       return action.payload;
//     default:
//       return state;
//   }
// };

// // Used to store targeted (by ID) movie and genre information
// const selected = (state = [], action) => {
//   switch (action.type) {
//     case 'SET_SELECTED':
//       return action.payload; //{Selected Movie Object} + [Genre Array]
//     default:
//       return state;
//   }
// };

// // Used to store the movie genres
// const genres = (state = {}, action) => {
//   switch (action.type) {
//     case 'SET_GENRES':
//       return action.payload;
//     default:
//       return state;
//   }
// };

// // Thanks Joey Heitz for this idea!
// const selectedPoster = (state = [], action) => {
//   console.log('action', action);
//   switch (action.type) {
//     case 'ID_CALL':
//       return action.payload;
//     default:
//       return state;
//   }
// };

// // Add Movie to Home Page
// function* postMovie(action) {
//   console.log('tweet tweet, post', action);
//   try {
//     yield put({ type: 'ERROR_RESET' });
//     yield axios.post('/api/movie', action.payload);
//     yield put({
//       type: 'SET_MOVIES',
//     });
//   } catch (err) {
//     console.log(err);
//     yield put({
//       type: 'ERROR_MSG', //***Need to do error message reducer***
//       payload: "Sorry we couldn't save your movie. Please try again.",
//     });
//   }
// }

// function* getMovies(action) {
//   try {
//     yield put({ type: 'ERROR_RESET' });
//     const response = yield axios.get('/api/movie');
//     console.log(response.data);
//     // version of a dispatch = put
//     yield put({
//       type: 'SET_MOVIES',
//       payload: response.data,
//     });
//   } catch (err) {
//     console.log('GET all movies error', err);
//     yield put({
//       type: 'ERROR_MSG', //***Need to do error message reducer***
//       payload: 'There was a problem the details! Please try again.',
//     });
//   }
// }

// // GET a single movie
// function* getSelected(action) {
//   console.log('moo, moo SHOW ID', action);
//   try {
//     const response = yield axios.get(`/api/movie/${action.payload}`);
//     const genreArray = response.data.map((movie) => {
//       return {
//         genre_id: movie.genre_id, //
//         category: movie.name, //<----transforms ID to item
//       };
//     });
//     yield put({
//       type: 'SET_SELECTED',
//       payload: { ...response.data[0], genreArray }, // <----Send 1st movie array only (index of zero) + genreArray
//     }); // <--- Thanks to my friend Joe Kuckleman with Programmatis for showing me this payload trick.
//   } catch (err) {
//     console.log(err);
//     yield put({
//       type: 'ERROR_MSG',
//       payload: 'There was a problem loading movies. Please try again.',
//     });
//   }
// }

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Create one store that all components can use
const storeInstance = createStore(
  rootReducer,
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
