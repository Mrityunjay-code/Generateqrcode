import React from 'react';
import QRCodeDisplay from './QRCodeDisplay';
import { useParams } from 'react-router-dom';
import './ui.css';

const Ui = ({ users }) => {
  const { handle } = useParams();
  const user = users.find((u) => u.InstagramHandel === handle);

  if (!user) {
    return <p>User not found</p>;
  }

  return (
    <div className="main11">
      <h1 className="n1">Welcome to the Website</h1>
      <div className="main">
        <div className="profile">
          <h2>Profile</h2>
          <img src={user.Image} alt="Profile Pic" className="profile-pic" /><br /><br />
          <span><b>Post:</b> {user.Posts}</span> <span><b>Followers:</b> {user.Followers}</span> <span><b>Following:</b> {user.Following}</span>
          <h2>{user.Name}</h2>
          <p>Email: {user.Email}</p>
          <p>Instagram: {user.InstagramHandel}</p>
          <br/>
          <div>
            <QRCodeDisplay
              website={user.WebsiteRebrandlyUrl}
              socialMedia={user.SocialRebrandlyUrl}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ui;
