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
  
  const addItem = item => {
    this.setState(state => ({
      todoList: [...state.todoList, item],
    }));
  }

  const deleteItem = (id) => {

    setState(state => ({
      todoList: this.state.todoList.filter(item => item._id !== id),
    }));

  };

  const saveItem = (updatedItem) => {

    setState(state => ({
      todoList: this.state.todoList.map(item =>
        item._id === updatedItem._id ? updatedItem : item
      ),
    }));

  };

  const toggleComplete = (id) => {
    setState(state => ({
      todoList: this.state.todoList.map(item =>
        item._id === id ? {
          ...item,
          complete: !item.complete,
        } : item
      ),
    }));
  };

  const toggleDetails = (id) => {
    setState(state => {
      let item = this.state.todoList.find(item => item._id === id);
      return {
        details: item || {},
        showDetails: !!item,
      };
    });
  };

  return (
    <>
      <Header
        todoList={this.state.todoList}
      />
      <section className="todo">
        <Form 
          addItem={addItem}
          handleInputChange={handleInputChange}
        />
        <div>
          <ul>
            { this.state.todoList.map(item => (
              <List item={item}
                toggleComplete={this.toggleComplete}
                toggleDetails={this.toggleDetails}
                deleteItem={this.deleteItem}
              />
            ))}
          </ul>
        </div>
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
