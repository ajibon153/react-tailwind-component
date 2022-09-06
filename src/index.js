import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import { menuReducer } from './store/index';

// const rootReducer = combineReducers({
//   menu: menuReducer,
// });

const store = createStore(menuReducer, applyMiddleware(ReduxThunk));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
