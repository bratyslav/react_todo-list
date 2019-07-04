import React from 'react';
import './App.css';
import { users } from './users';
import User from './User';
import TodoItems from './TodoItems';

function TodoList() {
  return users.map(person => (
    <div>
      <User person={person} />
      <br />
      <TodoItems userId={person['id']} />
      <hr />
    </div>
  ));
}

export default TodoList;