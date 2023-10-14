import React from 'react';
import { Link } from 'react-router-dom';
import './user.css'; 

const Userprofile = ({ users }) => {
  return (
    <div className="container">
      <h1>Visit users for more details</h1>
      <br />
      <ul className="navbar">
        {users.map((user) => (
          <li key={user.SNo}>
            <Link to={`/user/${user.InstagramHandel}`} className="nav-link">
              {user.Name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Userprofile;
