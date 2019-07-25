import React from 'react';

const TodoItem = ({ todo }) => {
  const state = (todo.completed ? '✓' : '✗');
  const { title, user, userId } = todo;

  return (
      <li>
        <div>{todo.id}</div>
        <div>{user} (id: {userId})</div>
        <div>{title}</div>
        <div>{state}</div>

        <hr />
      </li>
  );
};

export default TodoItem;