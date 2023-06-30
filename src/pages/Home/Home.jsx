import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
const Home= () => {
  return (
    <div className="homepage">
      {/* <div className="background-gif"></div> */}
      <div className="content1">
        <h1>Welcome to Inventory Management System</h1>
        <p>Efficiently manage your inventory with ease.</p>
        <div className="creative-content">
          <h2>Key Features:</h2>
          <ul>
            <li>Track inventory levels</li>
            <li>Manage orders and sales</li>
            <li>Generate reports</li>
          </ul>
          <p>Get started today and streamline your inventory management!</p>
          <Link to="/register">
            <button>Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;