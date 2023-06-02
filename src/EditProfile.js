import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

const EditProfile = () => {
  const history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState({ name: '', email: '', role: '' });

  useEffect(() => {
    // Fetch the user details with the given id and populate the form
  }, [id]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update the user's own profile details using the form data
    history.push(`/profile/${id}`);
  };

  return (
    <div>
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={user.name} onChange={handleChange} />

        <label>Email:</label>
        <input type="email" name="email" value={user.email} onChange={handleChange} />

        <label>Role:</label>
        <input type="text" name="role" value={user.role} onChange={handleChange} />

        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditProfile;
