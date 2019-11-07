import React, { useState, useReducer } from 'react';
import Modal from '../modal/index';
import Header from '../Header';
import Form from '../Form';
import Item from '../Item';
import Details from '../Details';
import { connect } from 'react-redux';
import uuid from 'uuid';

import { addItem, deleteItem, toggleComplete } from '../store/todolist-reducer';

import { When } from '../if';

import './todo.scss';

function ToDo() {

  const addItem = e => {
    e.preventDefault();
    e.target.reset();

    const defaults = { _id: uuid(), complete: false };
    const item = Object.assign({}, this.state.item, defaults);

    this.props.addItem(item);
    this.setState(state => ({
      item: {}
    }))
  }

  const deleteItem = id => {
    this.props.deleteItem(id);
  }

  const toggleComplete = id => {
    this.props.toggleComplete(id);
  }

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

function mapStateToProps(state) {
  return {
    todoList: state.todoList,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addItem: () => dispatch(addItem()),
    deleteItem: () => dispatch(deleteItem()),
    toggleComplete: () => dispatch(toggleComplete()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDo);
