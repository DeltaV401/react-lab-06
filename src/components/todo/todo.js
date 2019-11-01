import React, { useState } from 'react';
import Modal from '../modal/index';
import Header from '../Header';
import Form from '../Form';
import Item from '../Item';
import Details from '../Details';

import { When } from '../if';

import './todo.scss';

function ToDo() {
  let [todoList, setTodoList] = useState([]);
  let [showDetails, setShowDetails] = useState(false);
  let [details, setDetails] = useState({});

  const addItem = item => {
    setTodoList([...todoList, item]);
  }

  const deleteItem = (id) => {
    setTodoList(todoList.filter(item => item._id !== id));
  };

  const toggleComplete = (id) => {
    setTodoList(todoList.map(item => item._id === id ? {...item, complete: !item.complete} : item));
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
