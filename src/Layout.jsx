import { Routes, Route } from 'react-router-dom';
import Sidebar from './componemnts/Sidepanel/Sidebar.jsx'
import Navbar from './componemnts/Navbar/Navbar.jsx'
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import './Layout.css'
const Layout = () => {
  return (
    <div className="layout">
    <section> <Navbar /> </section>
    <section>
      <div className="content">
      <Sidebar />
        <Routes>
          <Route path="/" element={Dashboard} />      
        </Routes>
      </div>
      </section>
    </div>
  );
};

export default Layout;
