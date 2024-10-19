import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Layout/Navbar';
import Home from './Page/Home';

function App() {
  return (
    <div>
      <div>
        <Navbar/>
        <Home/>
        
      </div>
      
    </div>
  )
}

export default App