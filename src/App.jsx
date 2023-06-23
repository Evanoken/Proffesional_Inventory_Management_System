import Navbar from './componemnts/Navbar/Navbar'
import { Routes,  BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';

const App = () => {
    return (
        <div>
            <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route exact path="/login" element={<Dashboard/>}/> 
            </Routes>
            
            </BrowserRouter>
           
        </div>
    )
};
export default App;