import {GrDashboard} from 'react-icons/gr'
import { Link } from 'react-router-dom';
import './Sidebar.css'
const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
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
      </ul>
    </div>
  );
};

export default Sidebar;
