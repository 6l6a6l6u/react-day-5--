import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const CreateUser = () => {
  const history = useHistory();
  const [user, setUser] = useState({ name: '', email: '', role: '' });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a new user using the form data
    history.push('/users');
  };

  return (
    <div>
      <h2>Create User</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={user.name} onChange={handleChange} />

        <label>Email:</label>
        <input type="email" name="email" value={user.email} onChange={handleChange} />

        <label>Role:</label>
        <input type="text" name="role" value={user.role} onChange={handleChange} />

        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateUser;
