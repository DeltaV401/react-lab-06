import React from 'react';

// State Only
import ToDo from './components/todo/todo.js';

// API Connected (Live Data)
// import ToDo from './components/todo/todo-connected';

export default class App extends React.Component {
  render() {
    return (
      <>
        <ToDo />
      </>
    );
  }
}
