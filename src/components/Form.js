import React from 'react';
import { useState } from 'react';

const Form = () => {
  let [item, setItem] = useState({});

  const addItem = (e) => {
    e.preventDefault();
    e.target.reset();

    const defaults = { _id: uuid(), complete:false };
    const item = Object.assign({}, item, defaults);

    props.addItem(item);

    setItem({});
  };

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setItem({...item, [name]: value});
  };

  const handleSubmit = (e) => {
    props.handleSubmit(state.item);
  };

  return (
    <div>
      <h3>Add Item</h3>
      <form onSubmit={props.addItem}>
        <label>
          <span>To Do Item</span>
          <input
            name="text"
            placeholder="Add To Do List Item"
            onChange={props.handleInputChange}
          />
        </label>
        <label>
          <span>Difficulty Rating</span>
          <input type="range" min="1" max="5" name="difficulty" defaultValue="3" onChange={props.handleInputChange} />
        </label>
        <label>
          <span>Assigned To</span>
          <input type="text" name="assignee" placeholder="Assigned To" onChange={props.handleInputChange} />
        </label>
        <label>
          <span>Due</span>
          <input type="date" name="due" onChange={props.handleInputChange} />
        </label>
        <button>Add Item</button>
      </form>
    </div>
  )
}

export default Form;
