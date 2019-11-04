import { initialState } from "./todolist-reducer";

export const DETAILS = 'details';

export function reducer(state = initialState, action = {}) {
  switch(action.type) {
    default:
      return state;
  }
}