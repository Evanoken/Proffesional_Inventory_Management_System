import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./pages/Home/Home.jsx";
import Register from "./pages/Auth/Register/Register.jsx";
import Login from "./pages/Auth/Login/Login.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Services from "./pages/Services/Services.jsx";
import Products from "./pages/Products/Products.jsx";
import Sales from "./pages/Sales/Sales.jsx";
import Achievements from "./pages/Achievements/Achivements.jsx";
import Inventory from "./pages/Inventory/Inventory.jsx";
import Navbar from "./componemnts/Navbar/Navbar.jsx";


const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route path="/layout" element={<Layout/>}>
          <Route path="" element={<Dashboard />} />
          <Route path="sales" element={<Sales />} />
          <Route path="products" element={<Products />} />
          <Route path="services" element={<Services />} />
          <Route path="achievements" element={<Achievements />} />
          <Route path="inventory" element={<Inventory />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
