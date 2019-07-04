import React from 'react';
import './App.css';
import { todos } from './todos';

function TodoItems(props) {
  return (
    <ul> {
      todos
        .filter(todo => todo['userId'] === props.userId)
        .map(todo => {
          const state = (todo['completed'] ? '✓' : '✗');

          return (
            <li>
              { todo['title'] + ' ' + state }
            </li>
          );
        })
      }
    </ul>
  );
}

export default TodoItems;