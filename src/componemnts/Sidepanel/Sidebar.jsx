import {GrDashboard} from 'react-icons/gr'
import { Link } from 'react-router-dom';
import DashboardPic from '../../assets/Dashboard.jpg';
import avatarPic from '../../assets/avatar.jpg'
import './Sidebar.css'
// Dashboard from '../../pages/Dashboard/Dashboard';
// import Products from '../../pages/Products/Products.jsx';
// import Sales from '../../pages/Sales/Sales'
// import Achievemets from '../../pages/Achievements/Achievements'
// import Expenses from '../../pages/Expenses/Expenses'
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
        <Link to="/sales" className='lnk'>Sales</Link>
        </div>
        <div className="card">
        <img src={avatarPic} alt="piv" />
        <Link to="/Expenses" className='lnk'>Achievements</Link>
        </div>
       <div className="card">
        <img src={avatarPic} alt="piv" />
        <Link to="/Expenses" className='lnk'>Services</Link>
        </div>
        <div className="card">
        <img src={avatarPic} alt="piv" />
        <Link to="/Expenses" className='lnk'>Purchases</Link>
        </div>
        <div className="card">
        <img src={avatarPic} alt="piv" />
        <Link to="/Expenses" className='lnk'>Transfers</Link>
        </div>
        <div className="card">
        <img src={avatarPic} alt="piv" />
        <Link to="/Expenses" className='lnk'>Inventory</Link>
        </div>
        <div className="card">
        <img src={avatarPic} alt="piv" />
        <Link to="/Expenses" className='lnk'>Savings</Link>
        </div>
        <div className="card">
        <img src={avatarPic} alt="piv" />
        <Link to="/Expenses" className='lnk'>Admin</Link>
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
