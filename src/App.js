import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Ui from './Compo/Ui';
import Userprofile from './Compo/UserProfile';
// import Followers from './Compo/Followers';
// import Instra from './Compo/Instra';




const users = [
 
    {
        "SNo": 1,
        "Name": "Samriddhi Singh",
        "Image": "https://th.bing.com/th/id/OIP.8UqOTLl0knNXrmb8iSs8KwHaHw?w=207&h=216&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        "Email": "samriddhisingh213@gmail.com",
        "InstagramHandel": "_sammm_what",
        "WebsiteRebrandlyUrl": "https://app.campustales.in/Samriddhi-Singh-web",
        "WebsiteRebrandlyQRCode": null,
        "SocialRebrandlyUrl": "https://app.campustales.in/Samriddhi-Singh-social",
        "SocialRebrandlyQR": null,
        "CouponCode": null,
        "Followers": 1000,  
        "Following": 500,  
        "Posts": 50  
    },
    {
        "SNo": 2,
        "Name": "Disha Bardoloi",
        "Image": "https://th.bing.com/th/id/OIP.L8bs33mJBAUBA01wBfJnjQHaHa?w=203&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        "Email": "disha.bardoloi@gmail.com",
        "InstagramHandel": "dishkoosh_7",
        "WebsiteRebrandlyUrl": "https://app.campustales.in/Disha-Bardoloi-web",
        "WebsiteRebrandlyQRCode": null,
        "SocialRebrandlyUrl": "https://app.campustales.in/Disha-Bardoloi-social",
        "SocialRebrandlyQR": null,
        "CouponCode": null,
        "Followers": 1500,  
        "Following": 600,  
        "Posts": 75 
    },
    {
        "SNo": 3,
        "Name": "Khushi Pardasani",
        "Image": "https://th.bing.com/th/id/OIP.-d8GY5axNJZYoXsNOUJ4iwAAAA?w=208&h=208&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        "Email": "khushipardasani28@gmail.com",
        "InstagramHandel": "Khushi_pardasani",
        "WebsiteRebrandlyUrl": "https://app.campustales.in/Khushi-Pardasani-web",
        "WebsiteRebrandlyQRCode": null,
        "SocialRebrandlyUrl": "https://app.campustales.in/Khushi-Pardasani-social",
        "SocialRebrandlyQR": null,
        "CouponCode": null,
        "Followers": 800,  
        "Following": 400,  
        "Posts": 60  
    },
    {
        "SNo": 4,
        "Name": "Riyansh Mehta",
        "Image": "https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png",
        "Email": "riyanshm31@gmail.com",
        "InstagramHandel": "riyansh_12",
        "WebsiteRebrandlyUrl": "https://app.campustales.in/Riyansh-Mehta-web",
        "WebsiteRebrandlyQRCode": null,
        "SocialRebrandlyUrl": "https://app.campustales.in/Riyansh-Mehta-social",
        "SocialRebrandlyQR": null,
        "CouponCode": null,
        "Followers": 200,  
        "Following": 300,  
        "Posts": 25  
    }


]




function App() {
  return (
    <Router>
      
      <div className="App">
        {/* <Followers/> */}
        {/* <Instra/> */}
        <Routes>
          <Route path="/" element={<Userprofile users={users} />} />
          <Route path="/user/:handle" element={<Ui users={users} />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;