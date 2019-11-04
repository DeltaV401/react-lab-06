import React, { useState } from 'react';
import { When } from '../if';
import Modal from '../modal';
import Form from '../Form';
import Item from '../Item';
import Header from '../Header';
import Details from '../Details';

import './todo.scss';

const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';

function ToDo() {
  let [todoList, setTodoList] = useState([]);
  let [showDetails, setShowDetails] = useState(false);
  let [details, setDetails] = useState({});

  const callAPI = (url, method='get', body, handler, errorHandler) => {
    return fetch(url, {
      method: method,
      mode: 'cors',
      cache: 'no-cache',
      headers: { 'Content-Type': 'application/json' },
      body: body ? JSON.stringify(body) : undefined,
    })
      .then(response => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
      })
      .then(data => typeof handler === 'function' ? handler(data) : null )
      .catch( (e) => typeof errorHandler === 'function' ? errorHandler(e) : console.error(e)  );
  };

  const addItem = item => {
    setTodoList([...todoList, item]);
    console.log(todoList);
  }

  const deleteItem = id => {
    setTodoList(todoList.filter(item => item._id !== id));
  };

  const toggleComplete = id => {
    setTodoList(todoList.map(item => item._id === id ? {...item, complete: !item.complete} : item));
  };

  const toggleDetails = id => {
    let item = todoList.find(item => item._id === id);
    setDetails(item);
    setShowDetails(!!item);
  }

  const getTodoItems = () => {
    const _updateState = data => setTodoList(data.results);
    callAPI( todoAPI, 'GET', undefined, _updateState );
  };

  const componentDidMount = () => {
    getTodoItems();
  }

  return (
    <>
      <Header todoList={todoList} />

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
