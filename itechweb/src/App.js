import React from 'react'; 
import Welcome from './components/WelcomeComponent';
import './App.css';
import {Navbar, NavbarBrand} from 'reactstrap';

function App(){
  return (
    <div className="App">
     <Navbar dark color="primary"> 
     <div className='container'>
       <NavbarBrand href='/'>Max Blog</NavbarBrand>
     </div>
     
     </Navbar>
     <Welcome />

    </div>
  );
}

export default App;