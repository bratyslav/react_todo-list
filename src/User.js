import React from 'react';
import './App.css';

function User({person}) {
  return (
    <div className="user">
      {
        person['name']
      }
    </div>
  )
}

export default User;