import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header>
        <h2>
          There are
          {this.props.todoList.filter( item => !item.complete ).length}
          Items To Complete
        </h2>
      </header>
    )
  }
}

export default Header;