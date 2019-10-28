import React from 'react';
import uuid from 'uuid/v4';
import Modal from '../modal/index';
import Header from '../Header';
import Form from '../Form';
import List from '../List';
import Details from '../modal/Details';

import { When } from '../if';

import './todo.scss';

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      item: {},
      showDetails: false,
      details: {},
    };
  }

  handleInputChange = e => {
    let { name, value } = e.target;
    this.setState(state => ({
      item: {...state.item, [name]: value},
    }));
  };

  handleSubmit = (e) => {
    this.props.handleSubmit(this.state.item);
  };

  addItem = (e) => {

    e.preventDefault();
    e.target.reset();

    const defaults = { _id: uuid(), complete:false };
    const item = Object.assign({}, this.state.item, defaults);

    this.setState(state => ({
      todoList: [...state.todoList, item],
      item: {},
    }));

  };

  deleteItem = id => {

    this.setState(state => ({
      todoList: state.todoList.filter(item => item._id !== id),
    }));

  };

  saveItem = updatedItem => {

    this.setState(state => ({
      todoList: state.todoList.map(item =>
        item._id === updatedItem._id ? updatedItem : item
      ),
    }));

  };

  toggleComplete = id => {
    this.setState(state => ({
      todoList: state.todoList.map(item =>
        item._id === id ? {
          ...item,
          complete: !item.complete,
        } : item
      ),
    }));
  };

  toggleDetails = id => {
    this.setState(state => {
      let item = state.todoList.find(item => item._id === id);
      return {
        details: item || {},
        showDetails: !!item,
      };
    });
  }

  render() {

    return (
      <>
        <Header
          todoList={this.state.todoList}
        />
        <section className="todo">
          <Form 
            addItem={this.addItem}
            handleInputChange={this.handleInputChange}
          />
          <List 
            todoList={this.state.todoList}
            toggleComplete={this.toggleComplete}
            toggleDetails={this.toggleDetails}
            deleteItem={this.deleteItem}
          />
        </section>
        
      <When condition={this.state.showDetails}>
        <Modal title="To Do Item" close={this.toggleDetails}>
          <Details details={this.state.details}></Details>
        </Modal>
      </When>
      </>
    );
  }
}

export default ToDo;
