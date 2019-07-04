import React from 'react';
import './App.css';
import { users } from './users';
import User from './User';
import TodoItem from './TodoItem';
import { todos } from './todos';

function TodoList() {
  return users.map(person => (
    <div>
      <User person={person} />
      <br />
      <ul>
        {
          todos
            .filter(todo => todo['userId'] === person['id'])
            .map(todo => <TodoItem todo={todo} />)
        }
      </ul>
      <hr />
    </div>
  ));
}

export default TodoList;