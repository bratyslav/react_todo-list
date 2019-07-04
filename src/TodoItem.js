import React from 'react';

function TodoItem({todo}) {
  const state = (todo['completed'] ? '✓' : '✗');

  return (
    <li>
      {
        todo['title'] + ' ' + state
      }
    </li>
  );
}

export default TodoItem;