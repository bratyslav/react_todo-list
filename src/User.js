import React from 'react';
import './App.css';

function User(props) {
  return (
    <div className="user">
      { props.person['name'] }
    </div>
  )
}

export default User;