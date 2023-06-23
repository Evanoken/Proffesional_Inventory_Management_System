import { Switch, Route } from 'react-router-dom';
import Sidebar from './componemnts/Sidepanel/Sidebar'
import Navbar from './componemnts/Navbar/Navbar'
import Dashboard from './pages/Dashboard/Dashboard';

const Layout = () => {
  return (
    <div className="layout">
    <Navbar />
      <div className="content">
      <Sidebar />
        <Switch>
          <Route path="/" component={Dashboard} />      
        </Switch>
      </div>
    </div>
  );
};

export default Layout;
