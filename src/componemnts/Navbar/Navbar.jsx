import { FaList } from 'react-icons/fa';
import { MdOutlineNotificationAdd } from 'react-icons/md';
import { FcAbout, FcCustomerSupport } from 'react-icons/fc';
import { FiSettings } from 'react-icons/fi';
import { AiOutlineLogout } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import Avatar from '../../assets/avatar.jpg';
import io from 'socket.io-client';
import React, { useState, useEffect } from 'react';

const socket = io();
function Navbar() {
   const navigate = useNavigate();
   const [newMessageCount, setNewMessageCount] = useState(0);

   useEffect(() => {
    // Listen for 'newMessage' event
    socket.on('newMessage', () => {
      setNewMessageCount(newMessageCount + 1);
    });
    return () => {
      socket.off('newMessage');
    };
  }, [newMessageCount]);
  const handleLogout = (e) => {
    // Perform logout logic here
    e.preventDefault();
    //clearUserSession(); // Call your logout utility function

    // Redirect to the homepage
    navigate('/');
  };

  return (
    <>
      <div className="navContainer">
        <div className="navLeft">
          <span className="avatar">
            <img src={Avatar} alt="avatar" />
          </span>
          <span>
            <h3>ADMIN</h3>
          </span>
          <span>
            <FaList className="lIcon" />
          </span>
        </div>
        <div className="navRight">
          <span>
        <MdOutlineNotificationAdd className="rIcon" />
          {newMessageCount > 0 && (
            <span className="notificationCount">{newMessageCount}</span>
          )}
        </span>
          <span>
            <FcAbout className="rIcon" />
          </span>
          <span>
            <FcCustomerSupport className="rIcon" />
          </span>
          <span>
            <FiSettings className="rIcon" />
          </span>
          <span onClick={handleLogout}>
            <AiOutlineLogout className="rIconL" />
          </span>
        </div>
      </div>
    </>
  );
}

export default Navbar;
