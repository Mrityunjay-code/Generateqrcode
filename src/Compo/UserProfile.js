import React from 'react';
import { Link } from 'react-router-dom';
import './user.css' // Import the CSS file

const Userprofile = ({ users }) => {
    return (
      <div className="container">
        <h1>Visit users for more details</h1>
        <br/>
        <ul className="navbar">
          {users.map((user, index) => (
            <li key={index}>
              <Link to={`/user/${index}`} className="nav-link">{user.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default Userprofile;
