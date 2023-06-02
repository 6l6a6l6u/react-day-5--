import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <nav>
        <ul>
          <li>
            <Link to="/users">List Users</Link>
          </li>
          <li>
            <Link to="/create-user">Create User</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Dashboard;
