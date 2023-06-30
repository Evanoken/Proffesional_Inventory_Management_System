import { Link, Outlet } from "react-router-dom";
import './Layout.css'
const Layout = () => {
  return (
    <div>
      <div className="navCont">
        <Link to="/layout" className="lnk">
          Dashboard
        </Link>
        <Link to="/layout/products" className="lnk">
          Products
        </Link>
        <Link to="/layout/sales" className="lnk">
          Sales
        </Link>
        <Link to="/layout/achievements" className="lnk">
          Achievements
        </Link>
        <Link to="/layout/services" className="lnk">
          Services
        </Link>

        <Link to="/layout/inventory" className="lnk">
          Inventory
        </Link>
        <Link to="/layout/Expenses" className="lnk">
          Admin
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
