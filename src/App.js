import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Ui from './Compo/Ui';
import Userprofile from './Compo/UserProfile';



const users = [
  {
    name:"ajay pradhan",
    emailID: 'ajay.pradhan@spoxtale.com',
    website: 'https://www.2pointoh.in',
    socialmedia: 'https://www.instagram.com/2.oh_india',
  },
  {
    name:"usman",
    emailID: 'usman@spoxtale.com',
    website: 'https://www.2pointoh.in',
    socialmedia: 'https://www.instagram.com/2.oh_india',
  },
  {
    name:"shantanu singh",
    emailID: 'shantanu.singh@spoxtale.com',
    website: 'https://www.2pointoh.in',
    socialmedia: 'https://www.instagram.com/2.oh_india',
  },
  {
    name:"aditya",
    emailID: 'aditya.verma@spoxtale.com',
    website: 'https://www.2pointoh.in',
    socialmedia: 'https://www.instagram.com/2.oh_india',
  },
];

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Userprofile users={users} />} />
          <Route path="/user/:id" element={<Ui users={users} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;