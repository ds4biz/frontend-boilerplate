import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { examplesStore } from './examples';

const history = createBrowserHistory();

export default combineReducers({
  example: examplesStore.reducer,
  router: connectRouter(history),
});
