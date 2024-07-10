import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavigationBar from "./components/NavigationBar";
import Home from "./pages/Home";
import Add from "./pages/Add"
import Manage from "./pages/Manage"
import Login from "./pages/Login";
import ItemDetail from './pages/ItemDetail';

 

function App() {
  
  return (
    <><div>
      <NavigationBar />
        <Router>
          <Routes>
            <Route path="/" element= {<Home />} />
            <Route path="/manage" element = {<Manage />} />
            <Route path="/add" element = {<Add />} />
            <Route path="/login" element= {<Login />} />
            <Route path="/item" element= {<ItemDetail />} /> 
          </Routes>
        </Router>
    </div>
    </>
  );
}

export default App;
