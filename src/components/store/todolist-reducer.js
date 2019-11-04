export const ADD_TO_LIST = 'addtolist';
export const DELETE = 'delete';
export const TOGGLE_COMPLETE = 'toggle complete';

export const initialState = [];

export function reducer(todoList = initialState, action = {}) {
  switch(action.type) {
    case ADD_TO_LIST:
      return [...todoList, action.payload];
    case DELETE:
      return todoList.filter(item => item._id !== action.payload);
    case TOGGLE_COMPLETE:
      return todoList.map(item => item._id === action.payload ? {...item, complete: !item.complete} : item);
    default:
      return todoList;
  }
}

export function addItem(item) {
  return {
    type: ADD_TO_LIST,
    payload: item,
  };
}

export function deleteItem(id) {
  return {
    type: DELETE,
    payload: id,
  };
}

export function toggleComplete(id) {
  return {
    type: TOGGLE_COMPLETE,
    payload: id,
  };
}
