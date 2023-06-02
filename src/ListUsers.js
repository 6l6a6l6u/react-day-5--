import React from 'react';
import { Link } from 'react-router-dom';

const ListUsers = () => {
  const users = [
    { id: 1, name: 'John Doe', email: 'johndoe@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'janesmith@example.com', role: 'User' },
  ];

  const deleteUser = (id) => {
    // Delete the user with the given id
  };

  return (
    <div>
      <h2>List Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/profile/${user.id}`}>{user.name}</Link>
            <Link to={`/edit-user/${user.id}`}>Edit</Link>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListUsers;
