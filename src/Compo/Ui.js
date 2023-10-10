import React from 'react';
import QRCodeDisplay from './QRCodeDisplay';
import { useParams } from 'react-router-dom';
import pic from './profile.png';
import './ui.css';

const Ui = ({ users }) => {
  const { id } = useParams();
  const user = users[id];

  if (!user) {
    return <p>User not found</p>;
  }

  return (
    <div className='main11'>
    <h1 className='n1'>welcome to website</h1>
    <div className='main'>
   
    <div className='profile'>
        
         <h2>Profile</h2>
         <img src={pic} alt="Profile Pic" className="profile-pic" />
      <h2>{user.name}</h2>
      <p>Email: {user.emailID}</p>
      <br></br>
      <div>
      <QRCodeDisplay website={user.website} socialMedia={user.socialmedia} />
      </div>
      
    </div>
    </div>
    </div>
  );
};

export default Ui;
