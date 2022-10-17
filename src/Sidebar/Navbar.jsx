import React from 'react'
import logo from './logo.jpeg'
import { Link} from 'react-router-dom'
import { 
    BsFillHouseFill, 
    BsFillPeopleFill, 
    BsGearFill, 
    BsFillPersonFill,  
    BsBoxArrowRight,
    BsSearch,
    BsQuestionCircle,
    BsInfoCircle
} from 'react-icons/bs'
import { GoDeviceDesktop } from "react-icons/go";


const Navbar = ({show}) => {
  return (
      <nav>
      <div className={show ? "sidebar active" : 'sidebar'}>
         
          <ul>
              <li>
                  <Link to = '/'><BsFillHouseFill/>Home</Link>
              </li>
              <li>
                  <Link to = '/profile'><BsFillPersonFill/>Profile</Link>
              </li>
              <li>
                  <Link to = '/settings'><BsGearFill/>Settings</Link>
              </li>
              <li>
                  <Link to = '/Search'><BsSearch/>Search</Link>
              </li>
              <li>
                  <Link to = '/about'><BsFillPeopleFill/>About us</Link>
              </li>
              <li>
                  <Link to = '/help'><BsQuestionCircle/>Help</Link>
              </li>
              <li>
                  <Link to = '/covid'><BsInfoCircle/>Covid-19 Care</Link>
              </li>
              <li>
                  <Link to = '/logout'><BsBoxArrowRight/>Logout</Link>
              </li>
          </ul>
      </div>
      </nav>
  )
}

export default Navbar