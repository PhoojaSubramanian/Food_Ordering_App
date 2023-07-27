import React from 'react';
import './sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = ({ onClose }) => {
  return (
    <div className="sidebar">
      <div className='options_sidebar'>
        <li><img src ="./images/close_button.jpg" className='close-button' onClick={onClose}></img></li>
        <br></br>
        <b>
        <Link to = '/profile'><p className='options_option'>Profile</p></Link>
        <Link to ='/favourites'><p className='options_option'>Favourites</p></Link>
        <p className='options_option'>Reviews</p>
        <p className='options_option'>Help</p>
        <p className='options_option'>Settings</p>
        <Link to ='/feed'><p className='options_option'>Feedback</p></Link>
        <p className='options_option'>Log Out</p>
        </b>
      </div>
    </div>
  );
};

export default Sidebar;
