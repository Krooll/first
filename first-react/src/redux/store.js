import { createStore } from 'redux';
import { combineReducers } from 'redux';
import initialState from './initialState';
import listsReducer from './listRedux';
import columnsReducer from './columnRedux';
import cardsReducer from './cardRedux';
import searchStringReducer from './searchStringRedux';

const subreducers = {
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  searchString: searchStringReducer
}

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);



export default store;