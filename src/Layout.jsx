import { Routes, Route } from "react-router-dom";
import Sidebar from "./componemnts/Sidepanel/Sidebar.jsx";
import Navbar from "./componemnts/Navbar/Navbar.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Services from "./pages/Services/Services.jsx";
import Products from "./pages/Products/Products.jsx";
import "./Layout.css";
import Sales from "./pages/Sales/Sales.jsx";
import Achievements from "./pages/Achievements/Achivements.jsx";
import { apiDomain } from "./Utils/Utils.jsx";
import Inventory from "./pages/Inventory/Inventory.jsx";
const Layout = () => {
  return (
    <div className="layout">
      <div className="nav">
        <Navbar />
      </div>

      <div className="content">
        <div className="side">
          {" "}
          <Sidebar />
        </div>
        <div className="pg">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/Inventory" element={<Inventory/>} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Layout;
