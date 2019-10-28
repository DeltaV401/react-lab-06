import React from 'react';

import './modal.module.scss';

const Details = props => {
  return (
    <div className="todo-details">
      <header>
        <span>Difficulty: {props.details.difficulty}</span>
        <span>Assigned To: {props.details.assignee}</span>
        <span>Due: {props.details.due}</span>
      </header>
      <div className="item">
        {props.details.text}
      </div>
    </div>
  )
}

export default Details;
