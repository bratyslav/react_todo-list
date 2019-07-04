import React from 'react';

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