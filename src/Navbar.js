import React from 'react'
import { Link } from 'react-router-dom'
import{Outlet} from 'react-router-dom'
import logo from './images/spritesheet-removebg-preview.png'
const Navbar = () => {
  return (
    <>
    <nav className="bg-gradient-to-r  from-pink-400 to-red-400 w-full fixed top-0 z-10 " style={{zIndex:100}}>
    <div className="max-w-7xl mx-auto px-4 py-3">
      <div className="flex justify-between items-center">
        {/* Logo or Brand */}
        <div className="text-white text-xl font-semibold">
         <span style={{display:"flex",alignItems:"center"}}> <img src={logo} alt="Your Logo" className="h-11 w-auto" />&nbsp; CONTACTO</span> 
          </div>
        
        {/* Navigation Links */}
        <ul className="flex space-x-4">
          <li><Link to={""} className="text-white hover:text-gray-200">Home</Link></li>
          <li><Link to={"login"} className="text-white hover:text-gray-200">Login</Link></li>
          <li><Link to={"signup"} className="text-white hover:text-gray-200">Signup</Link></li>
          <li><Link to={"viewcontacts"} className="text-white hover:text-gray-200">View Contact</Link></li>
          <li><Link to={"addcontact"} className="text-white hover:text-gray-200">Add Contact</Link></li>
        </ul>
      </div>
    </div>
  </nav>
 <header>
  <main>
    <Outlet/>
  </main>
 </header>
  </>
  )
}

export default Navbar