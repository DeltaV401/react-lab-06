import React from 'react';

class List extends React.Component {
  render() {
    return (
    <div>
      <ul>
        { this.props.todoList.map(item => (
          <li
            className={`complete-${item.complete.toString()}`}
            key={item._id}
          >
            <span onClick={() => this.props.toggleComplete(item._id)}>
              {item.text}
            </span>
            <button onClick={() => this.props.toggleDetails(item._id)}>
              Details
            </button>
            <button onClick={() => this.props.deleteItem(item._id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
    )
  }
}

export default List;
