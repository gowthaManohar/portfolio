
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Home from "./components/Home"
import About from "./components/About"
import Work from "./components/Work"
import Contact from "./components/Contact"
import Header from "./components/Header"

import logo from './logo.svg';
import './App.css';

const App = ()=> {
  return (
    <div className="App">
  <BrowserRouter>
   
   <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/work" element={<Work />} />
  <Route path="/contact" element={<Contact />} />
  
  {/* other routes */}
</Routes>
      
     
      </BrowserRouter>
      
    </div>
  );
}

export default App;
