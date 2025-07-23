import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = ({home}) => {

   const [isOpen, setIsOpen] = useState(false);

  return (
  <div className='nav-class Dyn-nav border border-success '>
     
    <div className="navbar  px-3 py-2  gap-md-5 gap-sm-1 ">
        
        <Link to="/"><img className="Nav-image" src="./Images/Dlogo.png" alt="Logo"/></Link>
      
         <button className="bg-warning d-md-none me-5" onClick={() => setIsOpen(!isOpen)}>
          <i className="fa fa-bars"></i>
        </button>

        
        <ul  className="nav gap-3 vision d-md-flex ">
        <li  className="style fs-5" ><Link className="nav-link " to="/">{home}</Link></li>
        <li  className=" style fs-5" ><Link className="nav-link " to="/about">About</Link></li>
        <li  className="style fs-5" ><Link className="nav-link " to="/service">Services Setup</Link></li>
        <li  className="style fs-5" ><Link className="nav-link " to="/events">Events</Link></li>
        <li  className=" style fs-5" ><Link className="nav-link " to="/packages">Packages</Link></li>
        <li  className=" style fs-5" ><Link className="nav-link " to="/contact">Contact Us</Link></li>
        </ul>

      <div className="dropdown login-hover vision d-md-flex  ">
      <button className="style btn btn-warning dropdown-toggle px-4 py-2 me-5 fs-5 " style={{width:"80%"}}>
        Login
      </button>
      <ul className="dropdown-menu show-on-hover w-25">
        <li >
          <Link className="dropdown-item btn btn-outline-warning style p-2 text-center " to="/admlog">Admin Login</Link>
        </li>
     
      </ul>
    </div>
     


    </div>
    {isOpen && (
  <div className="d-md-none bg-black  px-4 py-3 border-top">
    <ul className="nav flex-column gap-1">
      <li><Link className="nav-link fs-5" to="/">{home}</Link></li>
      <li><Link className="nav-link fs-5" to="/about">About</Link></li>
      <li><Link className="nav-link fs-5" to="/service">Services Setup</Link></li>
      <li><Link className="nav-link fs-5" to="/events">Events</Link></li>
      <li><Link className="nav-link fs-5" to="/packages">Packages</Link></li>
      <li><Link className="nav-link fs-5" to="/contact">Contact Us</Link></li>
    </ul>
     <div className="dropdown login-hover d-md-none my-3 ">
      <button className="style btn btn-warning dropdown-toggle px-4 py-2 me-5 fs-5 " style={{width:"30%"}}>
        Login
      </button>
      <ul className="dropdown-menu show-on-hover w-25">
        <li >
          <Link className="dropdown-item btn btn-outline-warning style p-2 text-center " to="/admlog">Admin Login</Link>
        </li>
     
      </ul>
    </div>
  </div>
)}
     </div>
  )
}

export default Navbar
