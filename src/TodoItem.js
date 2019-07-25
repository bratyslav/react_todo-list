import React from 'react';
import PropTypes from 'prop-types';

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

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};

export default TodoItem;