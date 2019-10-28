import React from 'react';
import { When } from './if';

class Modal extends React.Component {
  render() {
    return (
      <When condition={this.props.showDetails}>
        <Modal title="To Do Item" close={this.props.toggleDetails}>
          <div className="todo-details">
            <header>
              <span>Assigned To: {this.props.details.assignee}</span>
              <span>Due: {this.props.details.due}</span>
            </header>
            <div className="item">
              {this.props.details.text}
            </div>
          </div>
        </Modal>
      </When>
    )
  }
}

export default Modal;
