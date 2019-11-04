import React, { useState, useReducer } from 'react';
import Modal from '../modal/index';
import Header from '../Header';
import Form from '../Form';
import Item from '../Item';
import Details from '../Details';

import { DELETE, ADD_TO_LIST, TOGGLE_COMPLETE } from '../store/todolist-reducer';
import { reducer, initialState } from '../store/todolist-reducer';

import { When } from '../if';

import './todo.scss';

function ToDo() {
  const [state, dispatch] = useReducer(reducer, initialState);
  let [todoList, setTodoList] = useState([]);
  let [showDetails, setShowDetails] = useState(false);
  let [details, setDetails] = useState({});

  const addItem = item => {
    dispatch({ type: ADD_TO_LIST, payload: item });
  }

  const deleteItem = id => {
    dispatch({ type: DELETE, payload: id });
  };

  const toggleComplete = id => {
    dispatch({ type: TOGGLE_COMPLETE, payload: id });
  };

  const toggleDetails = id => {
    let item = todoList.find(item => item._id === id);
    setDetails(item);
    setShowDetails(!!item);
  };

  return (
    <>
      <Header
        todoList={todoList}
      />
      <section className="todo">
        <Form 
          addItem={addItem}
        />
        <div>
          <ul>
            {todoList.map(item => (
              <Item item={item}
                toggleComplete={toggleComplete}
                toggleDetails={toggleDetails}
                deleteItem={deleteItem}
              />
            ))}
          </ul>
        </div>
      </section>
      
    <When condition={showDetails}>
      <Modal title="To Do Item" close={toggleDetails}>
        <Details details={details}/>
      </Modal>
    </When>
    </>
  );
}

export default ToDo;
