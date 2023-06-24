import {GrDashboard} from 'react-icons/gr'
import { Link } from 'react-router-dom';
import DashboardPic from '../../assets/Dashboard.jpg';
import avatarPic from '../../assets/avatar.jpg'
import './Sidebar.css'
import Dashboard from '../../pages/Dashboard/Dashboard';
const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="card">
        <img src={avatarPic} alt="piv" />
        <Link to="/" className='lnk'>Dashboard</Link>
        </div>
        <div className="card">
        <img src={avatarPic} alt="piv" />
        <Link to="/products" className='lnk'>Products</Link>
        </div>
        <div className="card">
        <img src={avatarPic} alt="piv" />
        <Link to="/achievements" className='lnk'>Achievements</Link>
        </div>
        <div className="card">
        <img src={avatarPic} alt="piv" />
        <Link to="/Expenses" className='lnk'>Expenses</Link>
        </div>
        
      {/* <ul>
        <li><GrDashboard className='Gcon'/>
          <Link to="/" className='lnk'>Dashboard</Link>
        </li>
        <li>
          <Link to="/products" className='lnk'>Products</Link>
        </li>
        <li>
          <Link to="/achievements" className='lnk'>Achievements</Link>
        </li>
        <li>
            <Link to="/Expenses" className='lnk'>Expenses</Link>
        </li>
        <li>
            <Link to="/Purchases" className='lnk'>Purchases</Link>
        </li>
        <li>
            <Link to="/Sales" className='lnk'>Sales</Link>
        </li>
      </ul> */}
    </div>
  );
};

export default Sidebar;
