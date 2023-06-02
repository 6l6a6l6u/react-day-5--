import React from 'react';
import { useParams } from 'react-router-dom';

const Profile = () => {
  const { id } = useParams();
  // Fetch the user details with the given id

  return (
    <div>
      <h2>Profile</h2>
      {/* Display the user's profile details */}
    </div>
  );
};

export default Profile;
