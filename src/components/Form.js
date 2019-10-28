import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <h3>Add Item</h3>
        <form onSubmit={this.props.addItem}>
          <label>
            <span>To Do Item</span>
            <input
              name="text"
              placeholder="Add To Do List Item"
              onChange={this.props.handleInputChange}
            />
          </label>
          <label>
            <span>Difficulty Rating</span>
            <input type="range" min="1" max="5" name="difficulty" defaultValue="3" onChange={this.props.handleInputChange} />
          </label>
          <label>
            <span>Assigned To</span>
            <input type="text" name="assignee" placeholder="Assigned To" onChange={this.props.handleInputChange} />
          </label>
          <label>
            <span>Due</span>
            <input type="date" name="due" onChange={this.props.handleInputChange} />
          </label>
          <button>Add Item</button>
        </form>
      </div>
    )
  }
}

export default Form;
