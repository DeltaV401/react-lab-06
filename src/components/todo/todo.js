import React from 'react';
import { useState } from 'react';
import Modal from '../modal/index';
import Header from '../Header';
import Form from '../Form';
import Item from '../Item';
import Details from '../Details';

import { When } from '../if';

import './todo.scss';

function ToDo() {
  let [todoList, setTodoList] = useState({});
  let [showDetails, setShowDetails] = useState({});
  let [details, setDetails] = useState({});

  const addItem = item => {
    setTodoList({todoList: [...todoList, item]});
  }

  const deleteItem = (id) => {

    this.setState(state => ({
      todoList: state.todoList.filter(item => item._id !== id),
    }));

  };

  const saveItem = (updatedItem) => {

    this.setState(state => ({
      todoList: state.todoList.map(item =>
        item._id === updatedItem._id ? updatedItem : item
      ),
    }));

  };

  const toggleComplete = (id) => {
    this.setState(state => ({
      todoList: state.todoList.map(item =>
        item._id === id ? {
          ...item,
          complete: !item.complete,
        } : item
      ),
    }));
  };

  const toggleDetails = id => {
    this.setState(state => {
      let item = state.todoList.find(item => item._id === id);
      return {
        details: item || {},
        showDetails: !!item,
      };
    });
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
        <Details details={details}></Details>
      </Modal>
    </When>
    </>
  );
}

export default ToDo;
