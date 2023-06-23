import { Link } from 'react-router-dom';
import './Sidebar.css'
const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/achievements">Achievements</Link>
        </li>
        <li>
            <Link to="/Expenses" >Expenses</Link>
        </li>
        <li>
            <Link to="/Purchases">Purchases</Link>
        </li>
        <li>
            <Link to="/Sales">Sales</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
