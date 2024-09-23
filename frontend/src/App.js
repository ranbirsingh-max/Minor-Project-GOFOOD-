import './App.css';
import Home from './screens/Home.jsx';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './screens/Login.jsx';


import 'bootstrap-dark-5/dist/css/bootstrap-dark.min.css';

import 'bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Signup from './screens/Signup.js';
import { CartProvider } from './components/ContextReducer.js';
import MyOrder from './screens/MyOrder.js';
import AboutMe from './components/AboutME.js'
import UploadFood from './components/UploadFood.js';







function App() {
  console.log('App component is rendering');
  return (
    <CartProvider>
      <Router>
    <div >
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/createuser" element={<Signup/>}/>
      <Route exact path="/myOrder" element={<MyOrder/>}/>
      <Route exact path="/about" element={<AboutMe/>}/>
      <Route path="/upload" element={<UploadFood />} />
      
      </Routes>
    </div>
    </Router>
    </CartProvider>
    
  );
}

export default App;
