import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Instra() {
  const [followers, setFollowers] = useState([]);
  const [followings, setFollowings] = useState([]);

  useEffect(() => {
    
    axios.get('https://api.twitter.com/1.1/followers/list')
      .then((response) => {
        setFollowers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

  
    axios.get('///')
      .then((response) => {
        setFollowings(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Followers</h1>
      <ul>
        {followers.map((follower) => (
          <li key={follower.id}>{follower.username}</li>
        ))}
      </ul>

      <h1>Followings</h1>
      <ul>
        {followings.map((following) => (
          <li key={following.id}>{following.username}</li>
        ))}
      </ul>
    </div>
  );
}

export default Instra;
