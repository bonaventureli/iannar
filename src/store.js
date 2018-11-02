import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

export default (preloadedState) => {
  const middleware = [thunk];
  const composeEnhancers = (process.env.NODE_ENV === 'development' &&
      window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
  return createStore(
      rootReducer,
      preloadedState,
      composeEnhancers(applyMiddleware(...middleware))
  );
};
