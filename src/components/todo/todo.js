import React from 'react';
import { useState, useEffect } from 'react';
import uuid from 'uuid/v4';

import Modal from '../modal/index';
import Header from '../Header';
import Form from '../Form';
import List from '../List';
import Details from '../modal/Details';

import { When } from '../if';

import './todo.scss';

function ToDo() {

  let startTodoList = [];
  let [todoList, setList] = useState(startTodoList);
  
  addItem((e) => {
    e.preventDefault();
    e.target.reset();

    const defaults = { _id: uuid(), complete:false };
    const item = Object.assign({}, state.item, defaults);

    setList(todoList.concat(item.toArray()));
  });

  let initialItem = {};
  let [item, setItem] = useState(initialItem);
  
  let showDetails = false;
  let details = {};

  handleInputChange((e) => {
    let { name, value } = e.target;
    setState(state => ({
      item: {...state.item, [name]: value},
    }));
  });

  handleSubmit((e) => {
    props.handleSubmit(state.item);
  });

  

  deleteItem((id) => {

    setState(state => ({
      todoList: state.todoList.filter(item => item._id !== id),
    }));

  });

  saveItem((updatedItem) => {

    setState(state => ({
      todoList: state.todoList.map(item =>
        item._id === updatedItem._id ? updatedItem : item
      ),
    }));

  });

  toggleComplete((id) => {
    setState(state => ({
      todoList: state.todoList.map(item =>
        item._id === id ? {
          ...item,
          complete: !item.complete,
        } : item
      ),
    }));
  });

  toggleDetails((id) => {
    setState(state => {
      let item = state.todoList.find(item => item._id === id);
      return {
        details: item || {},
        showDetails: !!item,
      };
    });
  })

  return (
    <>
      <Header
        todoList={state.todoList}
      />
      <section className="todo">
        <Form 
          addItem={addItem}
          handleInputChange={handleInputChange}
        />
        <List 
          todoList={state.todoList}
          toggleComplete={toggleComplete}
          toggleDetails={toggleDetails}
          deleteItem={deleteItem}
        />
      </section>
      
    <When condition={state.showDetails}>
      <Modal title="To Do Item" close={toggleDetails}>
        <Details details={state.details}></Details>
      </Modal>
    </When>
    </>
  );
}

export default ToDo;
