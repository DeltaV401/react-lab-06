import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { reducer as todoList } from './todolist-reducer';
import { reducer as item } from './item-reducer';

let reducer = combineReducers({
  todoList,
  item,
});

export default function() {
  return createStore(reducer, composeWithDevTools());
}
