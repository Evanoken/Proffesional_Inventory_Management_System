import { Routes, Route } from 'react-router-dom';
import Sidebar from './componemnts/Sidepanel/Sidebar.jsx'
import Navbar from './componemnts/Navbar/Navbar.jsx'
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import './Layout.css'
const Layout = () => {
  return (
    <div className="layout">
    <div className="nav"><Navbar /></div> 
    
      <div className="content">
        <div className="side"> <Sidebar /></div>
        <div className="pg">
        <Routes>
          <Route path="/" element={<Dashboard/>} />

        </Routes>
        </div>
        
      </div>
      
    </div>
  );
};

export default Layout;
