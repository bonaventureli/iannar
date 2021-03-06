import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import rootReducer from './reducers';

const axiosClient = axios.create({
  baseURL: process.env.API_HOST || '/api',
  responseType: 'json',
});

export default (preloadedState) => {
  const middleware = [thunk, axiosMiddleware(axiosClient)];
  const composeEnhancers = (process.env.NODE_ENV === 'development' &&
      window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
  return createStore(
      rootReducer,
      preloadedState,
      composeEnhancers(applyMiddleware(...middleware))
  );
};
