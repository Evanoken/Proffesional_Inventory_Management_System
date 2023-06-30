import {GrDashboard} from 'react-icons/gr'
import { Link } from 'react-router-dom';
import DashboardPic from '../../assets/Dashboard.jpg';
import avatarPic from '../../assets/avatar.jpg'
import './Sidebar.css'
const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="card">
        <img src={avatarPic} alt="piv" />
        <Link to="/dashboard" className='lnk'>Dashboard</Link>
        </div>
        <div className="card">
        <img src={avatarPic} alt="piv" />
        <Link to="/products" className='lnk'>Products</Link>
        </div>
        <div className="card">
        <img src={avatarPic} alt="piv" />
        <Link to="/sales" className='lnk'>Sales</Link>
        </div>
        <div className="card">
        <img src={avatarPic} alt="piv" />
        <Link to="/achievements" className='lnk'>Achievements</Link>
        </div>
       <div className="card">
        <img src={avatarPic} alt="piv" />
        <Link to="/services" className='lnk'>Services</Link>
        </div>
        <div className="card">
        <img src={avatarPic} alt="piv" />
        <Link to="/inventory" className='lnk'>Inventory</Link>
        </div>
        
        <div className="card">
        <img src={avatarPic} alt="piv" />
        <Link to="/Expenses" className='lnk'>Admin</Link>
        </div>
    </div>
  );
};

export default Sidebar;
